package com.example.restcontrollers;

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
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.PlaylistRepository;
import com.example.security.UserComponent;
import com.example.services.PlaylistService;
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
	private UserService userService;
	
	@Autowired 
	private TagService tagService;
	
	interface PlaylistView extends Playlist.Basic, Playlist.Songs,Playlist.Tags, Song.Basic,Tag.Basic{}
	
	@JsonView(PlaylistView.class)
	@RequestMapping("/api/Playlist/{id}")
	public ResponseEntity<Playlist> getPlaylist(@PathVariable long id) throws Exception{
		Playlist p=playlistService.findOne(id);
		return new ResponseEntity<>(p,HttpStatus.OK);
	}
	
	interface TopPlaylistView extends Playlist.Basic{}
	
	@JsonView(PlaylistView.class)
	@RequestMapping("/api/Top3Playlist")
	public ResponseEntity<List<Playlist>> getTopPlaylist() throws Exception{
		List<Playlist> topPlaylists=playlistService.findTop3ByOrderByNLikesDesc();
		return new ResponseEntity<>(topPlaylists,HttpStatus.OK);
	}
	
	interface WallPlaylistView extends Playlist.Basic,Playlist.Tags,Tag.Basic{}
	
	@JsonView(WallPlaylistView.class)
	@RequestMapping("/api/WallPlaylistsLogged/{id}")
	public ResponseEntity<List<Playlist>> getWallPlaylistsLogged(@PathVariable long id) throws Exception{
		if(userComponent.getIdLoggedUser()==id){
			List<Playlist> wallPlaylists=playlistService.findFirst100ByOrderByDateAsc();
			return new ResponseEntity<>(wallPlaylists,HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}
	
//	@JsonView(WallPlaylistView.class)
//	@RequestMapping("/api/WallPlaylistsLogged/{id}")
//	public ResponseEntity<Page<Playlist>> getWallPlaylistsLogged(@PathVariable long id,
//			@RequestParam (required=false) String page) throws Exception{
//		if(userComponent.getIdLoggedUser()==id){
//			if(page==null){
//				Page<Playlist> wallPlaylists=playlistService.findFirst100ByOrderByDateAsc(new PageRequest(0, 10));
//				return new ResponseEntity<>(wallPlaylists,HttpStatus.OK);
//			}else{
//				int numPage =  Integer.parseInt(page); 
//				Page<Playlist> wallPlaylists=playlistService.findFirst100ByOrderByDateAsc(new PageRequest(numPage, 10));
//				return new ResponseEntity<>(wallPlaylists,HttpStatus.OK);
//			}
//		}else
//			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//	}
	
	@JsonView(WallPlaylistView.class)
	@RequestMapping("/api/WallPlaylistsNotLogged")
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
			List<Playlist> playlists=playlistService.findByCreatorIdList(id);
			return new ResponseEntity<>(playlists,HttpStatus.OK);
	} else {
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
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
	
	interface CreatePlaylistView extends Playlist.Basic, Playlist.Tags,Tag.Basic{};
	
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
	
	

}
