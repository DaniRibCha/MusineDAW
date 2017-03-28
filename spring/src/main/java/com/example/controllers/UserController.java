package com.example.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.User;
import com.example.repositories.ArtistRepository;
import com.example.repositories.PlaylistRepository;
import com.example.repositories.SongRepository;
import com.example.repositories.TagRepository;
import com.example.repositories.UserRepository;
import com.example.security.UserComponent;

@Controller
public class UserController {

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

	//el usuario mira sus playlists gustadas
	//pagina privada usuario
	@RequestMapping("/MyLikes/{id}")
	public String getMyLikes(Model model, Pageable page, @PathVariable long id,
			@RequestParam(value = "like", required=false ) Long likeIdPlaylist){

		if(id!=userComponent.getIdLoggedUser()){
			return "accessDenied";
		}
		id=userComponent.getIdLoggedUser();
		User u=userRepository.findOne(id);

		if(likeIdPlaylist!=null){
			Playlist pToRemove=playlistRepository.findOne(likeIdPlaylist);
			pToRemove.removeUserlikeOfPlaylist(u);
			playlistRepository.save(pToRemove);
		}

		model.addAttribute("u",u);

		int n_likes=u.getLikedPlaylists().size();
		long n_followers=u.getFollowers().size();
		model.addAttribute("n_followers",n_followers);
		long n_following=u.getFollowing().size();
		model.addAttribute("n_following",n_following);
		int n_created=u.getCreatedPlaylists().size();
		model.addAttribute("n_created",n_created);


		List<User> userPage=new ArrayList<>();
		userPage.add(u);

		//Pageable pageable = new PageRequest(pageIndex,10);

		Page<Playlist> play = playlistRepository.findByUserlikesOfPlaylist(userPage, page);

		int pageIndex = play.getNumber();

		model.addAttribute("ident", id);
		model.addAttribute("showPrev", !play.isFirst());
		model.addAttribute("showNext", !play.isLast());
		model.addAttribute("nextPage", pageIndex+1);
		model.addAttribute("prevPage", pageIndex-1);

		List<Playlist> elems = play.getContent();

		for(int i=0;i<elems.size();++i){
			Playlist p=elems.get(i);
			if(p.getCreatorId()==id){
				p.setIdLogged(true);
			}
		}

		model.addAttribute("playlists",play);
		model.addAttribute("n_likes",n_likes);

		return "indexUtent_likes";
	}


	//el usuario mira sus playlists creadas
	//pagina provada usuario
	@RequestMapping("/MyPlaylists/{id}")
	public String getMyCreated(Model model, Pageable page, @PathVariable long id, 
			@RequestParam(value = "createdPlaylist", required=false ) Long createdPlaylist){
		if(id!=userComponent.getIdLoggedUser()){
			return "accessDenied";
		}

		id=userComponent.getIdLoggedUser();
		User u=userRepository.findOne(id);

		if(createdPlaylist==null){
		}else{
			Playlist pToDelete=playlistRepository.findOne(createdPlaylist);
			u.removeCreatedPlaylist(pToDelete);
			userRepository.save(u);
			playlistRepository.delete(pToDelete);
			return "redirect:/MyPlaylists/{id}";
		}

		model.addAttribute("u",u);

		//Pageable pageable = new PageRequest(pageIndex,10);
		Page<Playlist> playlistCreated = playlistRepository.findByCreatorId(id, page);
		//			
		int pageIndex = playlistCreated.getNumber();
		//				
		model.addAttribute("ident", id);
		model.addAttribute("showPrev", !playlistCreated.isFirst());
		model.addAttribute("showNext", !playlistCreated.isLast());
		model.addAttribute("nextPage", pageIndex+1);
		model.addAttribute("prevPage", pageIndex-1);

		long n_followers=u.getFollowers().size();
		model.addAttribute("n_followers",n_followers);
		long n_following=u.getFollowing().size();
		model.addAttribute("n_following",n_following);

		//aqui no hace falta trazar la ruta dinamica porque en esa pagina
		//siempre esta la ruta="MyPlaylists/{id}" (siempre el usuario es el creador)
		//model.addAttribute("playlists",playlistCreated);

		//			model.addAttribute("playlists",u.getCreatedPlaylists());

		model.addAttribute("playlists",playlistCreated);
		int n_created=u.getCreatedPlaylists().size();

		model.addAttribute("n_created",n_created);

		int n_likes=u.getLikedPlaylists().size();

		model.addAttribute("n_likes",n_likes);

		return "indexUtent_playlist";
	}

	//el usuario mira sus canciones favoritas
	//pagina privada usuario
	@RequestMapping("/MyFavorites/{id}")
	public String getMyFavorites(Model model, Pageable page, @PathVariable long id,
			@RequestParam(value = "favorite", required=false) Long id_song){

		if(id!=userComponent.getIdLoggedUser()){
			return "accessDenied";
		}

		id=userComponent.getIdLoggedUser();
		User u=userRepository.findOne(id);


		//si hay el titulo en el RequestParam->borrar cancion de favoritos
		if(id_song==null){}else{
			Song s=songRepository.findOne(id_song);
			u.removeFavoriteSong(s);
			userRepository.save(u);
		}

		List<User> userPage=new ArrayList<>();
		userPage.add(u);

		//Pageable pageable = new PageRequest(pageIndex,10);

		Page<Song> songs = songRepository.findByUsersFavoriteSong(userPage, page);

		int pageIndex = songs.getNumber();

		model.addAttribute("u",u);
		int n_favorites=u.getFavoriteSongs().size();
		long n_followers=u.getFollowers().size();
		model.addAttribute("n_followers",n_followers);
		long n_following=u.getFollowing().size();
		model.addAttribute("n_following",n_following);
		model.addAttribute("songs",songs);
		model.addAttribute("n_favorites",n_favorites);
		int n_created=u.getCreatedPlaylists().size();
		model.addAttribute("n_created",n_created);
		model.addAttribute("ident", id);
		model.addAttribute("showPrev", !songs.isFirst());
		model.addAttribute("showNext", !songs.isLast());
		model.addAttribute("nextPage", pageIndex+1);
		model.addAttribute("prevPage", pageIndex-1);

		return "indexUtent_favorites";
	}



	//el usuario mira sus seguidos
	//pagina privada usuario
	@RequestMapping("/MyFollowing/{id}")
	public String getMyFollowing(Model model, @PathVariable long id, Pageable page,
			@RequestParam(value = "follow", required=false) String followName){

		if(id!=userComponent.getIdLoggedUser()){
			return "accessDenied";
		}
		//id=userComponent.getIdLoggedUser();
		User u=userRepository.findOne(id);

		List<User> following=new ArrayList<>();
		following.add(u);

		Page<User> userPage = userRepository.findByFollowers(following,page);

		model.addAttribute("ident", id);
		model.addAttribute("following",userPage);
		model.addAttribute("showPrev", !userPage.isFirst());
		model.addAttribute("showNext", !userPage.isLast());
		model.addAttribute("nextPage", userPage.getNumber()+1);
		model.addAttribute("prevPage", userPage.getNumber()-1);


		//codigo para borrar un seguido desde le pagina following
		//si en el RequestParam hay el nombre del usuario
		//se borra de los seguidores
		if(followName==null){}else{
			User u1=userRepository.findByName(followName);
			u.removeFollowing(u1);
			userRepository.save(u);userRepository.save(u1);
		}

		model.addAttribute("u",u);

		//model.addAttribute("following",u.getFollowing());

		return "my_following_user";
	}


	//el usuario mira sus seguidores
	@RequestMapping("/MyFollowers/{id}")
	public String getMyFollowers(Model model, @PathVariable long id, Pageable page){

		if(id!=userComponent.getIdLoggedUser()){
			return "accessDenied";
		}

		id=userComponent.getIdLoggedUser();
		User u=userRepository.findOne(id);

		List<User> followed=new ArrayList<>();
		followed.add(u);

		Page<User> userPage = userRepository.findByFollowing(followed,page);


		model.addAttribute("ident", id);
		model.addAttribute("followers",userPage);
		model.addAttribute("showPrev", !userPage.isFirst());
		model.addAttribute("showNext", !userPage.isLast());
		model.addAttribute("nextPage", userPage.getNumber()+1);
		model.addAttribute("prevPage", userPage.getNumber()-1);

		model.addAttribute("u",u);

		//model.addAttribute("followers",u.getFollowers());
		return "my_followers_user";
	}



	@RequestMapping("/Config/{id}")
	public String config(Model model, @PathVariable long id,
			@RequestParam(value = "biography", defaultValue = "") String biography,
			@RequestParam(value = "country", defaultValue = "") String country, 
			@RequestParam(value = "city", defaultValue = "") String city,
			@RequestParam(value = "oldPassword", defaultValue = "") String oldPassword,
			@RequestParam(value = "newPassword", defaultValue = "") String newPassword)
					throws AuthenticationException{

		id=userComponent.getIdLoggedUser();
		User u=userRepository.findOne(id);

		if(!oldPassword.equals("")){

			if (!new BCryptPasswordEncoder().matches(oldPassword, u.getPasswordHash())) {
				model.addAttribute("idLogged", userComponent.getIdLoggedUser());
				return "wrongPass";
			}else{
				u.setPasswordHash(newPassword);
				userRepository.save(u);
			}
		}



		//si hay modificaciones les hace
		if(!biography.equals("")) u.setBiography(biography);

		if(!country.equals("")) u.setCountry(country);

		if(!city.equals("")) u.setCity(city);

		userRepository.save(u);

		model.addAttribute("u",u);


		return "config";
	}


}
