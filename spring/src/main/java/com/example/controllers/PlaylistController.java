package com.example.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.ArtistRepository;
import com.example.repositories.PlaylistRepository;
import com.example.repositories.SongRepository;
import com.example.repositories.TagRepository;
import com.example.repositories.UserRepository;
import com.example.security.UserComponent;
import com.example.services.ArtistService;
import com.example.services.PlaylistService;
import com.example.services.SongService;
import com.example.services.TagService;
import com.example.services.UserService;

@Controller
public class PlaylistController {

	
	@Autowired
	private SongService songService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private TagService tagService;
	
	@Autowired
	private PlaylistService playlistService;
	
	@Autowired
	private UserComponent userComponent;
	
	
	//id de la playlist
	@RequestMapping("/Playlist/{id}")
	public String songsPlaylist(Model model, Pageable page,  HttpServletRequest request, @PathVariable long id,
			@RequestParam(value = "favorite", required=false) Long id_song,
			@RequestParam(value = "like", required=false, defaultValue="") String like) {

		boolean login=userComponent.isLoggedUser();

		if(login){
			long idLogged=userComponent.getIdLoggedUser();
			User u=userService.findOne(idLogged);

			model.addAttribute("u",u);
		}

		model.addAttribute("login", login);

		Playlist p=playlistService.findOne(id);

		if(login){
			User uLogged=userService.findOne(userComponent.getIdLoggedUser());
			long idLogged=userComponent.getIdLoggedUser();
			model.addAttribute("uLogged",uLogged);
			if(like.equals("")){
			}else{
				p.addUserlikeOfPlaylist(uLogged);
				playlistService.save(p);
			}		

			List<Playlist> likedPlaylist=uLogged.getLikedPlaylists();
			boolean findedLike=false;
			for(int i=0;i<likedPlaylist.size() && !findedLike;++i){	
				if(likedPlaylist.get(i).getId_playlist()==p.getId_playlist()){
					findedLike=true;
				}
			}
			model.addAttribute("findedLike",findedLike);

			if(p.getCreatorId()==idLogged)
				model.addAttribute("findedLogged",true);		
		}

		//List<Song> songs= p.getSongsOfPlaylist();

		List<Playlist> play = new ArrayList<>();
		play.add(p);

		Page<Song> songs = songService.findByPlaylistsOfSong(play, page);
		List<Song> mySongs=songs.getContent();

		int pageIndex = songs.getNumber();


		model.addAttribute("ident", id);
		model.addAttribute("showPrev", !songs.isFirst());
		model.addAttribute("showNext", !songs.isLast());
		model.addAttribute("nextPage", pageIndex+1);
		model.addAttribute("prevPage", pageIndex-1);

		if(login){
			if(id_song==null){
			}else{
				long idLogged=userComponent.getIdLoggedUser();
				Song s=songService.findOne(id_song);
				User u=userService.findOne(idLogged);
				u.addFavoriteSong(s);
				userService.save(u);
			}
		}

		//			codigo para devolver si la cancion esta en los favoritos
		//			del usuario logeado
		if(login){//si un usuario esta logeado
			long idLogged=userComponent.getIdLoggedUser();
			User uLogged=userService.findOne(idLogged);
			List<Song> favoriteByUser=uLogged.getFavoriteSongs();
			for(int i=0;i<mySongs.size();++i){
				Song s=mySongs.get(i);
				for(int j=0;j<favoriteByUser.size();++j){
					if(s.getId_song()==favoriteByUser.get(j).getId_song()){
						s.setIdLogged(true);
					}
				}
			}

		}


		model.addAttribute("songs",songs);

		List<Playlist> topPlaylists=playlistService.findTop3ByOrderByNLikesDesc();

		model.addAttribute("topPlaylists",topPlaylists);

		model.addAttribute("topPlaylists",topPlaylists);

		model.addAttribute("p",p);

		return "Playlist";
	}

		
		//id->isUser
		//pagina privada
		@RequestMapping("/CreatePlaylist/{id}")
		public String createPlaylist(Model model, @PathVariable long id){

			id=userComponent.getIdLoggedUser();
			model.addAttribute("idLogged",id);

			User u=userService.findOne(id);


			model.addAttribute("u",u);

			return "createPlaylist";
		}
		
		

		//desde la pagina createPlaylist se envian los primeros datos de la playlist a la pagina editPlaylist
		//donde se pueden añadir canciones y modificar tambien los datos basicos
		//pagina privada
		@RequestMapping("/EditNewPlaylist/{idUser}")
		public String editNewPlaylist(Model model, @PathVariable long idUser,
				@RequestParam(value = "title", defaultValue = "") String title,
				@RequestParam(value = "description", defaultValue = "") String description, 
				@RequestParam(value = "tag", defaultValue = "") String tag){
			
			idUser=userComponent.getIdLoggedUser();
			User u=userService.findOne(idUser);
			if(idUser!=userComponent.getIdLoggedUser()){
				return "accessDenied";
			}
			Playlist p=new Playlist(title,u.getName(),u.getId_user());
			p.setDescription(description);
			Tag t=tagService.findByName(tag);
			if(t==null){//si no hay ese tag lo crea
				t=new Tag(tag);
				tagService.save(t);
			}
			
			p.addTagOfPlaylist(t);
			tagService.save(t);
			playlistService.save(p);
			
			u.addCreatedPlaylist(p);
			userService.save(u);
			
			
			model.addAttribute("u",u);
			model.addAttribute("tag",tag);
			
			
			List<Song> favoriteSongs=u.getFavoriteSongs();
			model.addAttribute("favoriteSongs",favoriteSongs);
			
			if(!title.equals("")) p.setTitle(title);
			if(!description.equals("")) p.setDescription(description);
			playlistService.save(p);
				
			model.addAttribute("p",p);
			
			return "editPlaylist";
		}
		
		

		@RequestMapping("/EditPlaylist/{idPlaylist}")
		public String editPlaylist(Model model,@PathVariable long idPlaylist, Pageable page,
				@RequestParam(value = "title", defaultValue = "") String title,
				@RequestParam(value = "description", defaultValue = "") String description, 
				@RequestParam(value = "tagToRemove", defaultValue = "") String tagToRemove,
				@RequestParam(value = "tagToAdd", defaultValue = "") String tagToAdd,
				@RequestParam(value = "ToRemove",required=false) String ToRemove,
				@RequestParam(value = "songToRemove",required=false) Long idSongToRemove,
				@RequestParam(value = "titleSong", defaultValue = "") String titleSong,
				@RequestParam(value = "artist", defaultValue = "") String artist,
				@RequestParam(value = "favorite",required=false) Long idSongToAdd){
			
			Playlist p=playlistService.findOne(idPlaylist);
			model.addAttribute("p",p);
			
			if(!title.equals("")) p.setTitle(title);
			if(!description.equals("")) p.setDescription(description);
			playlistService.save(p);
			
			long creator=p.getCreatorId();
			if(creator!=userComponent.getIdLoggedUser()){
				return "accessDenied";
			}
			
			//MostrarFavoritos
			
			User u=userService.findOne(creator);
			
			//si se pincha al boton remove se quita la cancion
			//desde la playlist
			if(ToRemove==null){}else{
				Song s=songService.findOne(idSongToRemove);
				p.removeSongOfPlaylist(s);
				playlistService.save(p);
			}
			
			List<User> userPage=new ArrayList<>();
			userPage.add(u);
			
			//Pageable pageable = new PageRequest(pageIndex,10);
			
			Page<Song> favoriteSongs = songService.findByUsersFavoriteSong(userPage, page);
			
			int pageIndex = favoriteSongs.getNumber();
				
			model.addAttribute("u",u);
			int n_favorites=u.getFavoriteSongs().size();
			long n_followers=u.getFollowers().size();
			model.addAttribute("n_followers",n_followers);
			long n_following=u.getFollowing().size();
			model.addAttribute("n_following",n_following);
			model.addAttribute("favoriteSongs",favoriteSongs);
			model.addAttribute("songs",p.getSongsOfPlaylist());
			model.addAttribute("n_favorites",n_favorites);
			int n_created=u.getCreatedPlaylists().size();
			model.addAttribute("n_created",n_created);
			
			model.addAttribute("ident", creator);
			model.addAttribute("showPrev", !favoriteSongs.isFirst());
			model.addAttribute("showNext", !favoriteSongs.isLast());
			model.addAttribute("nextPage", pageIndex+1);
			model.addAttribute("prevPage", pageIndex-1);
			//FinMostrarFavoritos
			
		
			if(!tagToRemove.equals("")){//si hay modifica del tag
				Tag t=tagService.findByName(tagToRemove);
				if(t==null){//si no hay ese tag no hace nada
				}else{
					p.removeTagOfPlaylist(t);
					tagService.save(t);
					playlistService.save(p);
				}
			}
			
			if(!tagToAdd.equals("")){//si hay modifica del tag
				Tag t=tagService.findByName(tagToAdd);
				if(t==null){//si no hay ese tag lo crea
					t=new Tag(tagToAdd);
				}
				p.addTagOfPlaylist(t);
				tagService.save(t);
				playlistService.save(p);
			}
			
			if(!titleSong.equals("") && !artist.equals("")){
				List<Artist> artists=new ArrayList<>();
				artists.add(artistService.findByName(artist));
				Song songToAdd=songService.findByArtistsOfSongAndTitle(artists, titleSong);
				p.addSongOfPlaylist(songToAdd);
				playlistService.save(p);
			}
			
			if(idSongToAdd!=null){
				Song songToAdd=songService.findOne(idSongToAdd);
				p.addSongOfPlaylist(songToAdd);
				playlistService.save(p);
			}
			
			
			

			return "editPlaylist";
		}

	
}
