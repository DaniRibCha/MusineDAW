package com.example;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.annotation.JsonView;

//import java.sql.Date;
import java.util.Date;

@Controller
public class MainController {

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
		
	//paginacion de las canciones
	@RequestMapping("/SongListBasic")
	public String getSongsBasic(Model model, Pageable page){
	
		Page<Song> songs = songRepository.findAll(page);
		model.addAttribute("variable", "canciones");
		model.addAttribute("pagina", "SongListBasic");
		model.addAttribute("contenido", songs);
		model.addAttribute("showPrev", !songs.isFirst());
		model.addAttribute("showNext", !songs.isLast());
		model.addAttribute("nextPage", songs.getNumber()+1);
		model.addAttribute("prevPage", songs.getNumber()-1);
		return "paginacion";
	}
	
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
		
		pageIndex = songs.getNumber();
			
		
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
		
//		codigo para devolver si la cancion esta en los favoritos
//		del usuario logeado
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
		
		List<Playlist> topPlaylists=new ArrayList<>();
		
		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
		
		model.addAttribute("topPlaylists",topPlaylists);
		
		model.addAttribute("p",p);
		
		return "Playlist";
	}
	
	@RequestMapping("/Artist/{id}")
	public String songsArtist(Model model, Pageable page, @PathVariable long id,
			@RequestParam(value = "favorite", required=false) Long id_song,
			@RequestParam(value = "follow", required=false) String followName) {
		
		boolean login=userComponent.isLoggedUser();
		
    	
    	model.addAttribute("login", login);
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(login){
			login=true;
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
			long idLogged=userComponent.getIdLoggedUser();
			Song s=songRepository.findOne(id_song);
			User u=userRepository.findOne(idLogged);
			u.addFavoriteSong(s);
			userRepository.save(u);
		}
		
		long idLogged=userComponent.getIdLoggedUser();
		User u=userRepository.findOne(idLogged);
		
		
		List<Artist> artist=new ArrayList<>();
		artist.add(a);
		
		//Pageable pageable = new PageRequest(pageIndex,10);
		
		Page<Song> songs1 = songRepository.findByArtistsOfSong(artist, page);
		List<Song> mySongs=songs1.getContent();
		pageIndex = songs1.getNumber();
			
		model.addAttribute("u",u);
		
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
		
		List<Playlist> topPlaylists=new ArrayList<>();
		
		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
		
		model.addAttribute("topPlaylists",topPlaylists);
		
		List<Artist> topArtists=new ArrayList<>();
		
		topArtists=artistRepository.findFirst3ByOrderByFollowersDesc();
		
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
	
	int pageIndex = 0;
	//el usuario mira sus canciones favoritas
	//pagina privada usuario
	@RequestMapping("/MyFavorites/{id}")
	public String getMyFavorites(Model model, Pageable page, @PathVariable long id,
			@RequestParam(value = "favorite", required=false) Long id_song){
		
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
		
		pageIndex = songs.getNumber();
			
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
	
	//el usuario mira sus playlists gustadas
	//pagina privada usuario
	@RequestMapping("/MyLikes/{id}")
	public String getMyLikes(Model model, Pageable page, @PathVariable long id,
			@RequestParam(value = "like", required=false ) Long likeIdPlaylist){
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
		
		pageIndex = play.getNumber();
			
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
		pageIndex = playlistCreated.getNumber();
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
		
//		model.addAttribute("playlists",u.getCreatedPlaylists());
		
		model.addAttribute("playlists",playlistCreated);
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		int n_likes=u.getLikedPlaylists().size();
		
		model.addAttribute("n_likes",n_likes);
		
		return "indexUtent_playlist";
	}
	
	//el usuario mira sus seguidores
	@RequestMapping("/MyFollowers/{id}")
	public String getMyFollowers(Model model, @PathVariable long id, Pageable page){
		
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
	
	//el usuario mira sus seguidos
	//pagina privada usuario
	@RequestMapping("/MyFollowing/{id}")
	public String getMyFollowing(Model model, @PathVariable long id, Pageable page,
			@RequestParam(value = "follow", required=false) String followName){
		
		id=userComponent.getIdLoggedUser();
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
	
	//el usuario mira las canciones favoritas de otro usuario (pagina No privada)
	@RequestMapping("/UserFavorites/{id}")
	public String getFavoritesByUser(Model model, Pageable page, @PathVariable long id,
			@RequestParam(value = "follow", required=false) String followName){

		User u=userRepository.findOne(id);
		
		boolean login=userComponent.isLoggedUser();
		
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(login){
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userRepository.findOne(idUserLogged);
			List<User> followingListUserLogged=uLogged.getFollowing();
			
			if(followName==null){
				//si no hay valor en el RequestParam no se hace nada
			}else if(followName.equals("addFollow")){//si hay ese valor en ese RequestParam
				uLogged.addFollowing(u);//se añade el usuario como seguido
				userRepository.save(uLogged);userRepository.save(u);
			}else{//si el RequestParam tiene un otro valor (stringa vacia) se borra la relacion
				//se follow del usuario logueado
				boolean findedFollow=false;
				for(int i=0;i<followingListUserLogged.size() && !findedFollow ;++i){
					if(followingListUserLogged.get(i).getId_user()==u.getId_user())
						findedFollow=true;
						uLogged.removeFollowing(u);
						userRepository.save(uLogged);userRepository.save(u);
				}
			}
			
			//busca si el usuario esta seguido desde el usuario logueado
			boolean findedFollow=false;
			for(int i=0;i<followingListUserLogged.size() && !findedFollow ;++i){
				if(followingListUserLogged.get(i).getId_user()==u.getId_user())
					findedFollow=true;
			}
			
			//findedFollow sirve a la Plantilla para poner el boton de seguir o no seguir mas
			model.addAttribute("findedFollow",findedFollow);
			
			model.addAttribute("idLogged",idUserLogged);
			
			model.addAttribute("uLogged",uLogged);
			
		}
		
		model.addAttribute("login",login);
		
		model.addAttribute("u",u);
		
		List<User> userPage=new ArrayList<>();
		userPage.add(u);
		
		//Pageable pageable = new PageRequest(pageIndex,10);
		
		Page<Song> songs = songRepository.findByUsersFavoriteSong(userPage, page);
		
		pageIndex = songs.getNumber();
			
		model.addAttribute("ident", id);
		model.addAttribute("showPrev", !songs.isFirst());
		model.addAttribute("showNext", !songs.isLast());
		model.addAttribute("nextPage", pageIndex+1);
		model.addAttribute("prevPage", pageIndex-1);
			
		int n_favorites=u.getFavoriteSongs().size();
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
		model.addAttribute("songs",songs);
		
		model.addAttribute("n_favorites",n_favorites);
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		return "searchUtent_favorites";
	}
	
	//el usuario mira las playlists gustadas de otro usuario
	@RequestMapping("/UserLikes/{id}")
	public String getUserLikes(Model model, @PathVariable long id, Pageable page,
			@RequestParam(value = "follow", required=false) String followName){
		
		User u=userRepository.findOne(id);
		
		boolean login=userComponent.isLoggedUser();
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(login){
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userRepository.findOne(idUserLogged);
			Page<Playlist> playlistCreated = playlistRepository.findByCreatorId(id, page);
//			
			pageIndex = playlistCreated.getNumber();
			
			List<Playlist> likedPlaylists=playlistCreated.getContent();
			
			for(int i=0;i<likedPlaylists.size();++i){
				Playlist p=likedPlaylists.get(i);
				if(p.getCreatorId()==idUserLogged){
					//si el usuario logueado es el creador le pone a la clase
					//el atributo idLogged=true
					//la plantilla mira ese atributo para trazar la ruta dinamica
					p.setIdLogged(true);
				}
			}
//				
			model.addAttribute("ident", id);
			model.addAttribute("showPrev", !playlistCreated.isFirst());
			model.addAttribute("showNext", !playlistCreated.isLast());
			model.addAttribute("nextPage", pageIndex+1);
			model.addAttribute("prevPage", pageIndex-1);
			
			
			
			List<User> followingListUserLogged=uLogged.getFollowing();
			
			if(followName==null){
				//si no hay valor en el RequestParam no se hace nada
			}else if(followName.equals("addFollow")){//si hay ese valor en ese RequestParam
				uLogged.addFollowing(u);//se añade el usuario como seguido
				userRepository.save(uLogged);userRepository.save(u);
			}else{//si el RequestParam tiene un otro valor (stringa vacia) se borra la relacion
				//se follow del usuario logueado
				boolean findedFollow=false;
				for(int i=0;i<followingListUserLogged.size() && !findedFollow ;++i){
					if(followingListUserLogged.get(i).getId_user()==u.getId_user())
						findedFollow=true;
						uLogged.removeFollowing(u);
						userRepository.save(uLogged);userRepository.save(u);
				}
				
			}
			
			//busca si el usuario esta seguido desde el usuario logueado
			boolean findedFollow=false;
			for(int i=0;i<followingListUserLogged.size() && !findedFollow ;++i){
				if(followingListUserLogged.get(i).getId_user()==u.getId_user())
					findedFollow=true;
			}
			
			//findedFollow sirve a la Plantilla para poner el boton de seguir o no seguir mas
			model.addAttribute("findedFollow",findedFollow);
			
			model.addAttribute("idLogged",idUserLogged);
			
			model.addAttribute("uLogged",uLogged);
			
		}
		
		model.addAttribute("login",login);
		
		model.addAttribute("u",u);
		
		int n_likes=u.getLikedPlaylists().size();
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		List<Playlist> likedPlaylists=u.getLikedPlaylists();
		
		//codigo para mirar si ha sido creada del usuario logueado
		//y trazar la ruta del creador
		if(login){
			
		}
		
		model.addAttribute("playlists",likedPlaylists);
		
		model.addAttribute("n_likes",n_likes);
		
		return "searchUtent_likes";
	}
	
	//el usuario mira las playlists creadas de otro usuario
	@RequestMapping("/UserPlaylists/{id}")
	public String getUserCreated(Model model, Pageable page, @PathVariable long id, 
		@RequestParam(value = "follow", required=false) String followName){
		
		User u=userRepository.findOne(id);
		
		boolean login=userComponent.isLoggedUser();
    	
    	model.addAttribute("login", login);
		
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(login){
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			long idUserLogged=userComponent.getIdLoggedUser();
			List<User> followingListUserLogged=uLogged.getFollowing();
			if(followName==null){
				//si no hay valor en el RequestParam no se hace nada
			}else if(followName.equals("addFollow")){//si hay ese valor en ese RequestParam
				uLogged.addFollowing(u);//se añade el usuario como seguido
				userRepository.save(uLogged);userRepository.save(u);
			}else{//si el RequestParam tiene un otro valor (stringa vacia) se borra la relacion
				//se follow del usuario logueado
				boolean findedFollow=false;
				for(int i=0;i<followingListUserLogged.size() && !findedFollow ;++i){
					if(followingListUserLogged.get(i).getId_user()==u.getId_user())
						findedFollow=true;
						uLogged.removeFollowing(u);
						userRepository.save(uLogged);userRepository.save(u);
				}
				
			}
			
			//busca si el usuario esta seguido desde el usuario logueado
			boolean findedFollow=false;
			for(int i=0;i<followingListUserLogged.size() && !findedFollow ;++i){
				if(followingListUserLogged.get(i).getId_user()==u.getId_user())
					findedFollow=true;
			}
			
			//findedFollow sirve a la Plantilla para poner el boton de seguir o no seguir mas
			model.addAttribute("findedFollow",findedFollow);
			
			model.addAttribute("idLogged",idUserLogged);
			
			model.addAttribute("uLogged",uLogged);
			
		}
		
		Page<Playlist> playlistCreated = playlistRepository.findByCreatorId(id, page);
//		
		pageIndex = playlistCreated.getNumber();
//			
		model.addAttribute("ident", id);
		model.addAttribute("showPrev", !playlistCreated.isFirst());
		model.addAttribute("showNext", !playlistCreated.isLast());
		model.addAttribute("nextPage", pageIndex+1);
		model.addAttribute("prevPage", pageIndex-1);
		
		model.addAttribute("u",u);
		
		long n_followers=u.getFollowers().size();
		model.addAttribute("n_followers",n_followers);
		long n_following=u.getFollowing().size();
		model.addAttribute("n_following",n_following);
		model.addAttribute("playlists",playlistCreated);
		int n_created=u.getCreatedPlaylists().size();
		model.addAttribute("n_created",n_created);
		
		return "searchUtent_playlist";
	}
	
	//el usuario mira los seguidores de otro usuario
		@RequestMapping("/UserFollowers/{id}")
		public String getUserFollowers(Model model, @PathVariable long id, Pageable page){
			
			boolean login=userComponent.isLoggedUser();
			
			model.addAttribute("login",login);
			
			if (login) model.addAttribute("idLogged",userComponent.getIdLoggedUser());
			
			if (login) model.addAttribute("uLogged",userRepository.findOne(userComponent.getIdLoggedUser()));
			
			User u=userRepository.findOne(id);
			
			model.addAttribute("u",u);
			
			//Paginacion
			
			List<User> followed=new ArrayList<>();
			followed.add(u);
			
			Page<User> userPage = userRepository.findByFollowing(followed,page);
			//ruta dinamica
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
			
			return "followers_user";
		}
		
		//el usuario mira los seguidos de otro usuario, pagina NO privada
		@RequestMapping("/UserFollowing/{id}")
		public String getUserFollowing(Model model, @PathVariable long id, Pageable page){
			
			boolean login=userComponent.isLoggedUser();
			User u=userRepository.findOne(id);
			
			//Pageable followers=(Pageable)u.getFollowers();
			List<User> following=new ArrayList<>();
			following.add(u);
			
			Page<User> userPage = userRepository.findByFollowers(following,page);
			//Page<User> userPage = userRepository.findAll(page);
			//ruta dinamica
			if(login){
				List<User> users=userPage.getContent();
				long idLogged=userComponent.getIdLoggedUser();
				for(int i=0;i<users.size();++i){
					if(users.get(i).getId_user()==idLogged){
						users.get(i).setIdLogged(true);
					}
				}
			}
			
			
//			
			model.addAttribute("login",login);
			
			if (login) model.addAttribute("idLogged",userComponent.getIdLoggedUser());
			
			if (login) model.addAttribute("uLogged",userRepository.findOne(userComponent.getIdLoggedUser()));
			
			model.addAttribute("u",u);
			
			//model.addAttribute("following",u.getFollowing());
			
			//Paginacion
			model.addAttribute("ident", id);
			model.addAttribute("following",userPage);
			model.addAttribute("showPrev", !userPage.isFirst());
			model.addAttribute("showNext", !userPage.isLast());
			model.addAttribute("nextPage", userPage.getNumber()+1);
			model.addAttribute("prevPage", userPage.getNumber()-1);
			
			return "following_user";
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
		public String editPlaylist(Model model,@PathVariable long idPlaylist,
				@RequestParam(value = "title", defaultValue = "") String title,
				@RequestParam(value = "description", defaultValue = "") String description, 
				@RequestParam(value = "tagToRemove", defaultValue = "") String tagToRemove,
				@RequestParam(value = "tagToAdd", defaultValue = "") String tagToAdd,
				@RequestParam(value = "titleSong", defaultValue = "") String titleSong,
				@RequestParam(value = "artist", defaultValue = "") String artist, 
				@RequestParam(value = "link", defaultValue = "") String link,
				@RequestParam(value = "toRemove",required=false) Long id_song){
			
			Playlist p=playlistRepository.findOne(idPlaylist);
			
			long creator=p.getCreatorId();
			
			if(creator!=userComponent.getIdLoggedUser()){
				return "accessDenied";
			}
			
			User uCreator=userRepository.findOne(creator);
			
			
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
			
			//codigo para dar de alta a una cancion en la playlist
			if(!titleSong.equals("")){//si hay el titulo en el RequestParam
				List<Song> songList=songRepository.findByTitle(titleSong);//busca la cancion desde el repositorio
				if(!artist.equals("")){
					Song s=new Song();
					boolean finded=false;
					for(int i=0;i<songList.size() && !finded;++i){
						List<Artist> artists=songList.get(i).getArtistsOfSong();
						for(int j=0;j<artists.size() && !finded;++j){
							if(artists.get(j).getName().equals(artist)){
								finded=true;
								s=songList.get(i);
							}
						}
					}
					if(finded){
						p.addSongOfPlaylist(s);
						playlistRepository.save(p);
					}
				}
			}
			
			if (!title.equals("")) p.setTitle(title);
			if (!description.equals(""))p.setDescription(description);
			playlistRepository.save(p);
			
			model.addAttribute("uCreator",uCreator);
			
			long idLogged=userComponent.getIdLoggedUser();
			
			model.addAttribute("u",userRepository.findOne(idLogged));
			
			model.addAttribute("p",p);
			
			String tagPlaylist=p.getTagsOfPlaylist().get(0).getName();
			
			model.addAttribute("tag",tagPlaylist);
			
			model.addAttribute("songs",p.getSongsOfPlaylist());
			
			
			
			return "editPlaylist";
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
		
		//busqueda desde la navbar
		@RequestMapping("/SearchPlaylist")
		public String serachPlaylist(Model model,
				@RequestParam(value = "key", defaultValue = "") String key){

			
			boolean login=userComponent.isLoggedUser();
			
			model.addAttribute("login", login);
			
			
			List<Playlist> topPlaylists=new ArrayList<>();
			
			topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
			
			model.addAttribute("topPlaylists",topPlaylists);
			
			List<Artist> topArtists=new ArrayList<>();
			
			topArtists=artistRepository.findFirst3ByOrderByFollowersDesc();
			
			model.addAttribute("topArtists",topArtists);
			
			List<Tag> topTags=new ArrayList<>();
			
			topTags=tagRepository.findFirst3ByOrderByNumberTagDesc();
			
			model.addAttribute("topTags",topTags);
			
			
			
			List<Playlist> playlists=new ArrayList<>();
			
			Tag t=tagRepository.findByName(key);
			
			//codigo para la busqueda por tags
			if(t==null){}else{
				List<Tag> tags=new ArrayList<>();
				tags.add(t);
				playlists=playlistRepository.findByTagsOfPlaylist(tags);
				//cheque el atributo booelan idLogged
				//para trazar la ruta dinamica de cada playlist desde la plantilla
				if(login){
					long idLogged=userComponent.getIdLoggedUser();
					
					for(int i=0;i<playlists.size();++i){
						Playlist p=playlists.get(i);
						if(p.getCreatorId()==idLogged){
							p.setIdLogged(true);;
						}
					}
				}
				model.addAttribute("playlistsTag",playlists);
			}
			
			List<Playlist> pList=playlistRepository.findByTitle(key);
			//chequea el atributo booelan idLogged
			//para trazar la ruta dinamica de cada playlist desde la plantilla
			if(pList==null){}else{
				if(login){
					long idLogged=userComponent.getIdLoggedUser();
					
					for(int i=0;i<pList.size();++i){
						Playlist p=pList.get(i);
						if(p.getCreatorId()==idLogged){
							p.setIdLogged(true);;
						}
					}
				}
				model.addAttribute("playlistsTitle",pList);
			}
			
			Artist a=artistRepository.findByName(key);
			//busqueda por artista
			if(a==null){}else{
				model.addAttribute("a",a);
			}
			
			if(login) model.addAttribute("idLogged",userComponent.getIdLoggedUser());
			if(login) {
				long idLogged=userComponent.getIdLoggedUser();
				model.addAttribute("uLogged",userRepository.findOne(idLogged));
			}
			model.addAttribute("key",key);
			
			return "searchPlaylist";
		}
		
		//busqueda desde un tag
		@RequestMapping("/SearchPlaylist/{key}")
		public String serachPlaylistTag(Model model, 
				@PathVariable String key){
						
			
			boolean login=userComponent.isLoggedUser();
			
			model.addAttribute("login", login);
			
			
			List<Playlist> topPlaylists=new ArrayList<>();
			
			topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
			
			model.addAttribute("topPlaylists",topPlaylists);
			
			List<Artist> topArtists=new ArrayList<>();
			
			topArtists=artistRepository.findFirst3ByOrderByFollowersDesc();
			
			model.addAttribute("topArtists",topArtists);
			
			List<Tag> topTags=new ArrayList<>();
			
			topTags=tagRepository.findFirst3ByOrderByNumberTagDesc();
			
			model.addAttribute("topTags",topTags);
			
			
			
			List<Playlist> playlists=new ArrayList<>();
			
			Tag t=tagRepository.findByName(key);
			
			//codigo para la busqueda por tags
			if(t==null){}else{
				List<Tag> tags=new ArrayList<>();
				tags.add(t);
				playlists=playlistRepository.findByTagsOfPlaylist(tags);
				//cheque el atributo booelan idLogged
				//para trazar la ruta dinamica de cada playlist desde la plantilla
				if(login){
					long idLogged=userComponent.getIdLoggedUser();
					
					for(int i=0;i<playlists.size();++i){
						Playlist p=playlists.get(i);
						if(p.getCreatorId()==idLogged){
							p.setIdLogged(true);;
						}
					}
				}
				model.addAttribute("playlistsTag",playlists);
			}
			
			
			if(login) model.addAttribute("idLogged",userComponent.getIdLoggedUser());
			
		
			if(login) {
				long idLogged=userComponent.getIdLoggedUser();
				model.addAttribute("uLogged",userRepository.findOne(idLogged));
			}
			
			model.addAttribute("key",key);
			
			return "searchPlaylist";
		}
		
		
	
}
