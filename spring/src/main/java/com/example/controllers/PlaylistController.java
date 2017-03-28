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

@Controller
public class PlaylistController {
	
	@Autowired
	private SongRepository songRepository;
	
	@Autowired
	private ArtistRepository artistRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PlaylistRepository playlistRepository;
	
	@Autowired
	private TagRepository tagRepository;
	
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
			User u=userRepository.findOne(idLogged);

			model.addAttribute("u",u);
		}

		model.addAttribute("login", login);

		Playlist p=playlistRepository.findOne(id);

		if(login){
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			long idLogged=userComponent.getIdLoggedUser();
			model.addAttribute("uLogged",uLogged);
			if(like.equals("")){
			}else{
				p.addUserlikeOfPlaylist(uLogged);
				playlistRepository.save(p);
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

		Page<Song> songs = songRepository.findByPlaylistsOfSong(play, page);
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
				Song s=songRepository.findOne(id_song);
				User u=userRepository.findOne(idLogged);
				u.addFavoriteSong(s);
				userRepository.save(u);
			}
		}

		//			codigo para devolver si la cancion esta en los favoritos
		//			del usuario logeado
		if(login){//si un usuario esta logeado
			long idLogged=userComponent.getIdLoggedUser();
			User uLogged=userRepository.findOne(idLogged);
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

		List<Playlist> playlistsTop=playlistRepository.findByOrderByNLikesDesc();
		List<Playlist> topPlaylists=new ArrayList<>();
		for(int i=0;i<3;++i){
			topPlaylists.add(playlistsTop.get(i));
		}

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

			User u=userRepository.findOne(id);


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
			User u=userRepository.findOne(idUser);
			if(idUser!=userComponent.getIdLoggedUser()){
				return "accessDenied";
			}
			Playlist p=new Playlist(title,u.getName(),u.getId_user());
			p.setDescription(description);
			Tag t=tagRepository.findByName(tag);
			if(t==null){//si no hay ese tag lo crea
				t=new Tag(tag);
				tagRepository.save(t);
			}
			
			p.addTagOfPlaylist(t);
			tagRepository.save(t);
			playlistRepository.save(p);
			
			u.addCreatedPlaylist(p);
			userRepository.save(u);
			
			model.addAttribute("u",u);
			model.addAttribute("tag",tag);
			model.addAttribute("p",p);
			
			return "editPlaylist";
		}
		
		

		@RequestMapping("/EditPlaylist/{idPlaylist}")
		public String editPlaylist(Model model,@PathVariable long idPlaylist, Pageable page,
				@RequestParam(value = "title", defaultValue = "") String title,
				@RequestParam(value = "description", defaultValue = "") String description, 
				@RequestParam(value = "tagToRemove", defaultValue = "") String tagToRemove,
				@RequestParam(value = "tagToAdd", defaultValue = "") String tagToAdd,
				@RequestParam(value = "toRemove",required=false) Long id_song){
			
			Playlist p=playlistRepository.findOne(idPlaylist);
			
			long creator=p.getCreatorId();
			if(creator!=userComponent.getIdLoggedUser()){
				return "accessDenied";
			}
			
			User uCreator=userRepository.findOne(creator);
			
//			//MostrarFavoritos
//			if(creator!=userComponent.getIdLoggedUser()){
//				return "accessDenied";
//			}
//			
//			User u=userRepository.findOne(creator);
//			
//			
//			//si hay el titulo en el RequestParam->borrar cancion de favoritos
//			if(id_song==null){}else{
//				Song s=songRepository.findOne(id_song);
//				u.removeFavoriteSong(s);
//				userRepository.save(u);
//			}
//			
//			List<User> userPage=new ArrayList<>();
//			userPage.add(u);
//			
//			//Pageable pageable = new PageRequest(pageIndex,10);
//			
//			Page<Song> songs = songRepository.findByUsersFavoriteSong(userPage, page);
//			
//			pageIndex = songs.getNumber();
//				
//			model.addAttribute("u",u);
//			int n_favorites=u.getFavoriteSongs().size();
//			long n_followers=u.getFollowers().size();
//			model.addAttribute("n_followers",n_followers);
//			long n_following=u.getFollowing().size();
//			model.addAttribute("n_following",n_following);
//			model.addAttribute("songs",songs);
//			model.addAttribute("n_favorites",n_favorites);
//			int n_created=u.getCreatedPlaylists().size();
//			model.addAttribute("n_created",n_created);
//			model.addAttribute("ident", creator);
//			model.addAttribute("showPrev", !songs.isFirst());
//			model.addAttribute("showNext", !songs.isLast());
//			model.addAttribute("nextPage", pageIndex+1);
//			model.addAttribute("prevPage", pageIndex-1);
//			//FinMostrarFavoritos
			if(id_song==null){}else{
				Song s=songRepository.findOne(id_song);
				p.removeSongOfPlaylist(s);
				playlistRepository.save(p);
				songRepository.save(s);
			}
				
		
			if(!tagToRemove.equals("")){//si hay modifica del tag
				Tag t=tagRepository.findByName(tagToRemove);
				if(t==null){//si no hay ese tag no hace nada
				}else{
					p.removeTagOfPlaylist(t);
					tagRepository.save(t);
					playlistRepository.save(p);
				}
			}
			
			if(!tagToAdd.equals("")){//si hay modifica del tag
				Tag t=tagRepository.findByName(tagToAdd);
				if(t==null){//si no hay ese tag lo crea
					t=new Tag(tagToAdd);
				}
				p.addTagOfPlaylist(t);
				tagRepository.save(t);
				playlistRepository.save(p);
			}
			

			return "editPlaylist";
		}

	
}
