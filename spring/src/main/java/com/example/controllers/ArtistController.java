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
import com.example.services.ArtistService;
import com.example.services.PlaylistService;
import com.example.services.SongService;
import com.example.services.TagService;
import com.example.services.UserService;

@Controller
public class ArtistController {
	
	@Autowired
	private SongService songService;
	
	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PlaylistService playlistService;
	
	@Autowired
	private TagService tagService;
	
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
			User uLogged=userService.findOne(idUserLogged);
			Artist a=artistService.findOne(id);
			
			if(followName==null){
			}else if(followName.equals("removeFollow")){
				a.removeFollowerOfArtist(uLogged);
				artistService.save(a);
			}else if(followName.equals("addFollow")){
				a.addFollowerOfArtist(uLogged);
				artistService.save(a);
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
		
		Artist a=artistService.findOne(id);
		
		model.addAttribute("a",a);
		
		int n_followers=a.getFollowersOfArtist().size();
		model.addAttribute("n_followers",n_followers);
		List<Song> songs=a.getSongsOfArtist();
		
		if(id_song==null){
		}else{
			if(login){
				long idLogged=userComponent.getIdLoggedUser();
				Song s=songService.findOne(id_song);
				User u=userService.findOne(idLogged);
				u.addFavoriteSong(s);
				userService.save(u);
			}
		}
		
		List<Artist> artist=new ArrayList<>();
		artist.add(a);
		
		//Pageable pageable = new PageRequest(pageIndex,10);
		
		Page<Song> songs1 = songService.findByArtistsOfSong(artist, page);
		List<Song> mySongs=songs1.getContent();
		int pageIndex = songs1.getNumber();
			
		
		
//		codigo para devolver si la cancion esta en los favoritos
//		del usuario logeado
		if(login){//si un usuario esta logeado
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userService.findOne(idUserLogged);
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
		
		List<Playlist> topPlaylists=playlistService.findTop3ByOrderByNLikesDesc();
		model.addAttribute("topPlaylists",topPlaylists);
		
		List<Artist> topArtists=artistService.findTop3ByOrderByFollowersDesc();
		model.addAttribute("topArtists",topArtists);
		
		if(login){
			long idLogged1=userComponent.getIdLoggedUser();
			model.addAttribute("u",userService.findOne(idLogged1));
		}
		
		return "Artist";
	}
	
	
	@RequestMapping("/ArtistFollowers/{id}")
	public String getArtistFollowers(Model model, Pageable page, @PathVariable long id){
		
		
		boolean login=userComponent.isLoggedUser();

		if (login){
			User uLogged=userService.findOne(userComponent.getIdLoggedUser());


			model.addAttribute("u",uLogged);

			model.addAttribute("login",login);
		}
//		
		Artist a=artistService.findOne(id);
		
		model.addAttribute("a",a);
		
		List<Artist> art=new ArrayList<>();
		art.add(a);
		
		Page<User> userPage = userService.findByFollowingArtists(art,page);
		
		
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
