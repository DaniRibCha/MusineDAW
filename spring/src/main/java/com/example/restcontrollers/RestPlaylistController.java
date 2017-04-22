package com.example.restcontrollers;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.PlaylistRepository;
import com.example.security.UserComponent;
import com.example.services.ArtistService;
import com.example.services.PlaylistService;
import com.example.services.SongService;
import com.example.services.TagService;
import com.example.services.UserService;
import com.fasterxml.jackson.annotation.JsonView;

import java.sql.Date;

@RestController
public class RestPlaylistController {
	
	private static final Logger log = LoggerFactory.getLogger(RestPlaylistController.class);
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired 
	private PlaylistService playlistService;
	
	@Autowired 
	private SongService songService;
	
	@Autowired 
	private UserService userService;
	
	@Autowired 
	private TagService tagService;
	
	@Autowired 
	private ArtistService artistService;
	
	interface PlaylistView extends Playlist.Basic, Playlist.Songs,Playlist.Tags, Song.Basic,Tag.Basic,Song.Artists,Artist.Basic{}
	
	@JsonView(PlaylistView.class)
	@RequestMapping("/api/Playlist/{id}")
	public ResponseEntity<Playlist> getPlaylist(@PathVariable long id) throws Exception{
		Playlist p=playlistService.findOne(id);
		return new ResponseEntity<>(p,HttpStatus.OK);
	}
	
	interface TopPlaylistView extends Playlist.Basic{}
	
	@JsonView(PlaylistView.class)
	@RequestMapping("/api/Playlist/Top3")
	public ResponseEntity<List<Playlist>> getTopPlaylist() throws Exception{
		List<Playlist> topPlaylists=playlistService.findTop3ByOrderByNLikesDesc();
		return new ResponseEntity<>(topPlaylists,HttpStatus.OK);
	}
	
	interface WallPlaylistView extends Playlist.Basic,Playlist.Tags,Tag.Basic{}
	
	@JsonView(WallPlaylistView.class)
	@RequestMapping("/api/Playlist/WallLogged/{id}")
	public ResponseEntity<Page<Playlist>> getWallPlaylistsLogged(@PathVariable long id, 
			Pageable page) throws Exception{
		if(userComponent.getIdLoggedUser()==id){
			Page<Playlist> wallPlaylists=playlistService.findFirst100ByOrderByDateAsc(page);
			return new ResponseEntity<>(wallPlaylists,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}


	@JsonView(WallPlaylistView.class)
	@RequestMapping("/api/Playlist/WallNotLogged")
	public ResponseEntity<List<Playlist>> getWallPlaylistsNotLogged() throws Exception{
		List<Playlist> wallPlaylists=playlistService.findTop10ByOrderByNLikesDesc();
		return new ResponseEntity<>(wallPlaylists,HttpStatus.OK);
	}

	interface MyPlaylistsView extends Playlist.Basic, Playlist.Songs,Playlist.Tags, Song.Basic{}
	
	@JsonView(MyPlaylistsView.class)
	@RequestMapping("/api/MyPlaylists/{id}")
	public ResponseEntity<List<Playlist>> getPlaylists(@PathVariable long id) throws Exception{
		//User uLogged=userComponent.getLoggedUser();
		if(userComponent.getIdLoggedUser()==id){
			List<Playlist> playlists=playlistService.findByCreatorId(id);
			return new ResponseEntity<>(playlists,HttpStatus.OK);
	} else {
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}
	}
	
	@JsonView(MyPlaylistsView.class)
	@RequestMapping("/api/UserPlaylists/{id}")
	public ResponseEntity<List<Playlist>> getUserPlaylists(@PathVariable long id) throws Exception{
		List<Playlist> playlists=playlistService.findByCreatorId(id);
		if(playlists!=null){
			return new ResponseEntity<>(playlists,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(MyPlaylistsView.class)
	@RequestMapping("/api/Playlist/MyLikes/{id}")
	public ResponseEntity<List<Playlist>> getLikedPlaylists(@PathVariable long id) throws Exception{
		//User uLogged=userComponent.getLoggedUser();
		if(userComponent.getIdLoggedUser()==id){
			User u=userService.findOne(id);
			List<Playlist> playlists=u.getLikedPlaylists();
			return new ResponseEntity<>(playlists,HttpStatus.OK);
	} else {
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}
	}
	
	@JsonView(MyPlaylistsView.class)
	@RequestMapping("/api/Playlist/UserLikes/{id}")
	public ResponseEntity<List<Playlist>> getUserLikes(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		List<Playlist> playlists=u.getLikedPlaylists();
		if(playlists!=null){
			return new ResponseEntity<>(playlists,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	interface PlaylistTagsView extends Playlist.Basic, Playlist.Tags, Tag.Basic{};
	
	@JsonView(PlaylistTagsView.class)
	@RequestMapping("/api/PlaylistTags/{id}")
	public ResponseEntity<List<Tag>> getPlaylistTags(@PathVariable long id) throws Exception{
		Playlist p=playlistService.findOne(id);
		List<Tag> tags=p.getTagsOfPlaylist();
		return new ResponseEntity<>(tags,HttpStatus.OK);
	}
	
	interface CreatePlaylistView extends Playlist.Basic, Playlist.Tags, Tag.Basic{};
	
	@JsonView(CreatePlaylistView.class)
	@RequestMapping(value="/api/CreatePlaylist/{id}", method=RequestMethod.POST)
	public ResponseEntity<Playlist> CreatePlaylist(@PathVariable long id, 
			@RequestBody Playlist newPlaylist,
			@RequestParam(value = "tag") String tag,
			@RequestParam(value = "description",required=false) String description
			) throws Exception{
		if(userComponent.getIdLoggedUser()==id){
			User u=userService.findOne(id);
			//primer tag obligatiorio como en el controlador web
			//cheque para ver si el tag ya existe
			if(tagService.findByName(tag)==null){
				Tag firstTag=new Tag(tag);
				tagService.save(firstTag);
				newPlaylist.addTagOfPlaylist(firstTag);
				
			}else{
				newPlaylist.addTagOfPlaylist(tagService.findByName(tag));
			}
			u.addCreatedPlaylist(newPlaylist);
			//hay que poner la fecha
			Calendar calobj = Calendar.getInstance();
			java.sql.Date currentSysDate = new java.sql.Date(calobj.getTime().getTime());
			newPlaylist.setDate(currentSysDate);
			//si llega tambien la descripción
			newPlaylist.setDescription(description);
			playlistService.save(newPlaylist);
			userService.save(u);
			return new ResponseEntity<>(newPlaylist,HttpStatus.CREATED);
		}
		else{
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
interface EditPlaylistView extends Playlist.Basic, Playlist.Tags,Playlist.Songs,Song.Basic,Song.Artists,Tag.Basic,Artist.Basic{};
	
	@JsonView(EditPlaylistView.class)
	@RequestMapping(value="/api/EditPlaylist/{idPlaylist}", method=RequestMethod.PUT)
	public ResponseEntity<Playlist> EditPlaylist(@PathVariable long idPlaylist, 
			@RequestParam(value = "title", defaultValue = "") String title,
			@RequestParam(value = "description", defaultValue = "") String description, 
			@RequestParam(value = "tagToRemove", defaultValue = "") String tagToRemove,
			@RequestParam(value = "tagToAdd", defaultValue = "") String tagToAdd,
			@RequestParam(value = "songToRemove",required=false) Long idSongToRemove,
			@RequestParam(value = "titleSong", defaultValue = "") String titleSong,
			@RequestParam(value = "artist", defaultValue = "") String artist,
			@RequestParam(value = "favorite",required=false) Long idSongToAdd
			) throws Exception{
		Playlist p=playlistService.findOne(idPlaylist);
		if(userComponent.getIdLoggedUser()==p.getCreatorId()){
			//borrar cancion desde la playlist
			if(idSongToRemove==null){}else{
				Song s=songService.findOne(idSongToRemove);
				p.removeSongOfPlaylist(s);
				playlistService.save(p);
			}
			//quitar tag
			if(!tagToRemove.equals("")){//si hay modifica del tag
				Tag t=tagService.findByName(tagToRemove);
				if(t==null){//si no hay ese tag no hace nada
				}else{
					p.removeTagOfPlaylist(t);
					tagService.save(t);
					playlistService.save(p);
				}
			}
			//añadir tag
			if(!tagToAdd.equals("")){//si hay modifica del tag
				Tag t=tagService.findByName(tagToAdd);
				if(t==null){//si no hay ese tag lo crea
					t=new Tag(tagToAdd);
				}
				p.addTagOfPlaylist(t);
				tagService.save(t);
				playlistService.save(p);
			}
			//añadir cancion desde formulario
			if(!titleSong.equals("") && !artist.equals("")){
				List<Artist> artists=new ArrayList<>();
				artists.add(artistService.findByName(artist));
				Song songToAdd=songService.findByArtistsOfSongAndTitle(artists, titleSong);
				p.addSongOfPlaylist(songToAdd);
				playlistService.save(p);
			}
			
			//añadir cancion desde las favoritas que aparecen
			if(idSongToAdd!=null){
				Song songToAdd=songService.findOne(idSongToAdd);
				p.addSongOfPlaylist(songToAdd);
				playlistService.save(p);
			}
			
			if(!title.equals("")) p.setTitle(title);
			if(!description.equals("")) p.setDescription(description);
			playlistService.save(p);
			
			return new ResponseEntity<>(p,HttpStatus.OK);
		}
		else{
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
	interface DeletePlaylistView extends Playlist.Basic{};
	
	@JsonView(DeletePlaylistView.class)
	@RequestMapping(value="/api/DeletePlaylist/{idPlaylist}", method=RequestMethod.DELETE)
	public ResponseEntity<Playlist> DeletePlaylist(@PathVariable long idPlaylist){
		Playlist playlist=playlistService.findOne(idPlaylist);
		if (playlist != null) {
			long idUser=userComponent.getIdLoggedUser();
			User u=userService.findOne(idUser);
			if(idUser==playlist.getCreatorId()){
				u.removeCreatedPlaylist(playlist);
				playlistService.delete(playlist.getId_playlist());
				userService.save(u);
				return new ResponseEntity<>(playlist, HttpStatus.OK);
			}else{
				return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
			}	
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	interface LikePlaylistView extends Playlist.Basic, Playlist.Likes,User.Basic{};
	
	@JsonView(LikePlaylistView.class)
	@RequestMapping(value="/api/Playlist/Like", method=RequestMethod.POST)
	public ResponseEntity<Playlist> LikePlaylist(@RequestParam long idPlaylist){
		Playlist playlist=playlistService.findOne(idPlaylist);
		if(playlist!=null){
			long idUser=userComponent.getIdLoggedUser();
			User u=userService.findOne(idUser);
			playlist.addUserlikeOfPlaylist(u);
			playlistService.save(playlist);
			return new ResponseEntity<>(playlist , HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	
		}
	
	@JsonView(LikePlaylistView.class)
	@RequestMapping(value="/api/Playlist/NotLike", method=RequestMethod.DELETE)
	public ResponseEntity<Playlist> NotLikePlaylist(@RequestParam long idPlaylist){
		Playlist playlist=playlistService.findOne(idPlaylist);
		if(playlist!=null){
			long idUser=userComponent.getIdLoggedUser();
			User u=userService.findOne(idUser);
			playlist.removeUserlikeOfPlaylist(u);
			playlistService.save(playlist);
			return new ResponseEntity<>(playlist , HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	
		}
		
		
		
		
		
}
		
		
	

