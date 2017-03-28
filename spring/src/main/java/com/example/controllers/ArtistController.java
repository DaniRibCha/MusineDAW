package com.example.controllers;

import java.util.ArrayList;
import java.util.List;

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
import com.example.classes.User;
import com.example.repositories.ArtistRepository;
import com.example.repositories.PlaylistRepository;
import com.example.repositories.SongRepository;
import com.example.repositories.TagRepository;
import com.example.repositories.UserRepository;
import com.example.security.UserComponent;

@Controller
public class ArtistController {
	
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
	
	@RequestMapping("/Artist/{id}")
	public String songsArtist(Model model, Pageable page, @PathVariable long id,
			@RequestParam(value = "favorite", required=false) Long id_song,
			@RequestParam(value = "follow", required=false) String followName) {
		
		boolean login=userComponent.isLoggedUser();
		
    	
    	model.addAttribute("login", login);
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(login){
			model.addAttribute("idLogged",userComponent.getIdLoggedUser());
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userRepository.findOne(idUserLogged);
			Artist a=artistRepository.findOne(id);
			
			if(followName==null){
			}else if(followName.equals("removeFollow")){
				a.removeFollowerOfArtist(uLogged);
				artistRepository.save(a);
			}else if(followName.equals("addFollow")){
				a.addFollowerOfArtist(uLogged);
				artistRepository.save(a);
			}
			
			List<User> followersArtist=a.getFollowersOfArtist();
			//busca si el usuario esta seguido desde el usuario logueado
			boolean findedFollow=false;
			for(int i=0;i<followersArtist.size() && !findedFollow ;++i){
				if(followersArtist.get(i).getId_user()==uLogged.getId_user())
					findedFollow=true;
			}
			
			//findedFollow sirve a la Plantilla para poner el boton de seguir o no seguir mas
			model.addAttribute("findedFollow",findedFollow);
			
			model.addAttribute("idUser",idUserLogged);
			
		}
		
		model.addAttribute("login",login);
		
		Artist a=artistRepository.findOne(id);
		
		model.addAttribute("a",a);
		
		int n_followers=a.getFollowersOfArtist().size();
		model.addAttribute("n_followers",n_followers);
		List<Song> songs=a.getSongsOfArtist();
		
		if(id_song==null){
		}else{
			if(login){
				long idLogged=userComponent.getIdLoggedUser();
				Song s=songRepository.findOne(id_song);
				User u=userRepository.findOne(idLogged);
				u.addFavoriteSong(s);
				userRepository.save(u);
			}
		}
		
		List<Artist> artist=new ArrayList<>();
		artist.add(a);
		
		//Pageable pageable = new PageRequest(pageIndex,10);
		
		Page<Song> songs1 = songRepository.findByArtistsOfSong(artist, page);
		List<Song> mySongs=songs1.getContent();
		int pageIndex = songs1.getNumber();
			
		
		
//		codigo para devolver si la cancion esta en los favoritos
//		del usuario logeado
		if(login){//si un usuario esta logeado
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userRepository.findOne(idUserLogged);
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
		
		model.addAttribute("songs",songs1);
		
		model.addAttribute("ident", id);
		model.addAttribute("showPrev", !songs1.isFirst());
		model.addAttribute("showNext", !songs1.isLast());
		model.addAttribute("nextPage", pageIndex+1);
		model.addAttribute("prevPage", pageIndex-1);
		
		model.addAttribute("tags",a.getTagsOfArtist());
		
		List<Playlist> playlistsTop=playlistRepository.findByOrderByNLikesDesc();
		List<Playlist> topPlaylists=new ArrayList<>();
		for(int i=0;i<3;++i){
			topPlaylists.add(playlistsTop.get(i));
		}
		
		model.addAttribute("topPlaylists",topPlaylists);
		model.addAttribute("topPlaylists",topPlaylists);
		
		List<Artist> artistsTop=artistRepository.findByOrderByFollowersDesc();
		List<Artist> topArtists=new ArrayList<>();
		for(int i=0;i<3;++i){
			topArtists.add(artistsTop.get(i));
		}
		
		model.addAttribute("topArtists",topArtists);
		
		if(login){
			long idLogged1=userComponent.getIdLoggedUser();
			model.addAttribute("u",userRepository.findOne(idLogged1));
		}
		
		return "Artist";
	}
	
	
	@RequestMapping("/ArtistFollowers/{id}")
	public String getArtistFollowers(Model model, Pageable page, @PathVariable long id){
		
		
		boolean login=userComponent.isLoggedUser();

		if (login){
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());


			model.addAttribute("u",uLogged);

			model.addAttribute("login",login);
		}
//		
		Artist a=artistRepository.findOne(id);
		
		model.addAttribute("a",a);
		
		List<Artist> art=new ArrayList<>();
		art.add(a);
		
		Page<User> userPage = userRepository.findByFollowingArtists(art,page);
		
		
		if(login){
			List<User> users=userPage.getContent();
			long idLogged=userComponent.getIdLoggedUser();
			for(int i=0;i<users.size();++i){
				if(users.get(i).getId_user()==idLogged){
					users.get(i).setIdLogged(true);
				}
			}
		}
		
		model.addAttribute("ident", id);
		model.addAttribute("followers",userPage);
		model.addAttribute("showPrev", !userPage.isFirst());
		model.addAttribute("showNext", !userPage.isLast());
		model.addAttribute("nextPage", userPage.getNumber()+1);
		model.addAttribute("prevPage", userPage.getNumber()-1);
		
		//model.addAttribute("followers",a.getFollowersOfArtist());
		
		return "followers_artist";
	}

}
