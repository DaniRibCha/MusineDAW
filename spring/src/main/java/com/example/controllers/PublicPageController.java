package com.example.controllers;
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
import com.fasterxml.jackson.annotation.JsonView;

//import java.sql.Date;
import java.util.Date;

@Controller
public class PublicPageController {

	
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
	



	//el usuario mira las canciones favoritas de otro usuario (pagina No privada)
	@RequestMapping("/UserFavorites/{id}")
	public String getFavoritesByUser(Model model, Pageable page, @PathVariable long id,
			@RequestParam(value = "follow", required=false) String followName){

		User u=userService.findOne(id);

		boolean login=userComponent.isLoggedUser();

		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(login){
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userService.findOne(idUserLogged);
			List<User> followingListUserLogged=uLogged.getFollowing();

			if(followName==null){
				//si no hay valor en el RequestParam no se hace nada
			}else if(followName.equals("addFollow")){//si hay ese valor en ese RequestParam
				uLogged.addFollowing(u);//se añade el usuario como seguido
				userService.save(uLogged);userService.save(u);
			}else{//si el RequestParam tiene un otro valor (stringa vacia) se borra la relacion
				//se follow del usuario logueado
				boolean findedFollow=false;
				for(int i=0;i<followingListUserLogged.size() && !findedFollow ;++i){
					if(followingListUserLogged.get(i).getId_user()==u.getId_user())
						findedFollow=true;
					uLogged.removeFollowing(u);
					userService.save(uLogged);userService.save(u);
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

		Page<Song> songs = songService.findByUsersFavoriteSong(userPage, page);

		int pageIndex = songs.getNumber();

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

		User u=userService.findOne(id);

		boolean login=userComponent.isLoggedUser();
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(login){
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userService.findOne(idUserLogged);
			Page<Playlist> playlistCreated = playlistService.findByCreatorId(id, page);
			//			
			int pageIndex = playlistCreated.getNumber();

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
				userService.save(uLogged);userService.save(u);
			}else{//si el RequestParam tiene un otro valor (stringa vacia) se borra la relacion
				//se follow del usuario logueado
				boolean findedFollow=false;
				for(int i=0;i<followingListUserLogged.size() && !findedFollow ;++i){
					if(followingListUserLogged.get(i).getId_user()==u.getId_user())
						findedFollow=true;
					uLogged.removeFollowing(u);
					userService.save(uLogged);userService.save(u);
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

		User u=userService.findOne(id);

		boolean login=userComponent.isLoggedUser();

		model.addAttribute("login", login);

		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(login){
			User uLogged=userService.findOne(userComponent.getIdLoggedUser());
			long idUserLogged=userComponent.getIdLoggedUser();
			List<User> followingListUserLogged=uLogged.getFollowing();
			if(followName==null){
				//si no hay valor en el RequestParam no se hace nada
			}else if(followName.equals("addFollow")){//si hay ese valor en ese RequestParam
				uLogged.addFollowing(u);//se añade el usuario como seguido
				userService.save(uLogged);userService.save(u);
			}else{//si el RequestParam tiene un otro valor (stringa vacia) se borra la relacion
				//se follow del usuario logueado
				boolean findedFollow=false;
				for(int i=0;i<followingListUserLogged.size() && !findedFollow ;++i){
					if(followingListUserLogged.get(i).getId_user()==u.getId_user())
						findedFollow=true;
					uLogged.removeFollowing(u);
					userService.save(uLogged);userService.save(u);
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

		Page<Playlist> playlistCreated = playlistService.findByCreatorId(id, page);
		//		
		int pageIndex = playlistCreated.getNumber();
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

		if (login) model.addAttribute("uLogged",userService.findOne(userComponent.getIdLoggedUser()));

		User u=userService.findOne(id);

		model.addAttribute("u",u);

		//Paginacion

		List<User> followed=new ArrayList<>();
		followed.add(u);

		Page<User> userPage = userService.findByFollowing(followed,page);
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
		User u=userService.findOne(id);

		//Pageable followers=(Pageable)u.getFollowers();
		List<User> following=new ArrayList<>();
		following.add(u);

		Page<User> userPage = userService.findByFollowers(following,page);
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

		if (login) model.addAttribute("uLogged",userService.findOne(userComponent.getIdLoggedUser()));

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



	//busqueda desde la navbar
	@RequestMapping("/SearchPlaylist")
	public String serachPlaylist(Model model,
			@RequestParam(value = "key", defaultValue = "") String key){


		boolean login=userComponent.isLoggedUser();

		model.addAttribute("login", login);


		List<Playlist> topPlaylists=playlistService.findTop3ByOrderByNLikesDesc();
		model.addAttribute("topPlaylists",topPlaylists);


		List<Artist> topArtists=artistService.findTop3ByOrderByFollowersDesc();
		model.addAttribute("topArtists",topArtists);

		List<Tag> topTags=tagService.findTop3ByOrderByNumberTagDesc();
		model.addAttribute("topTags",topTags);



		List<Playlist> playlists=new ArrayList<>();

		Tag t=tagService.findByName(key);

		//codigo para la busqueda por tags
		if(t==null){}else{
			List<Tag> tags=new ArrayList<>();
			tags.add(t);
			playlists=playlistService.findByTagsOfPlaylist(tags);
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

		List<Playlist> pList=playlistService.findByTitle(key);
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

		Artist a=artistService.findByName(key);
		//busqueda por artista
		if(a==null){}else{
			model.addAttribute("a",a);
		}

		if(login) model.addAttribute("idLogged",userComponent.getIdLoggedUser());
		if(login) {
			long idLogged=userComponent.getIdLoggedUser();
			model.addAttribute("uLogged",userService.findOne(idLogged));
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


		List<Playlist> topPlaylists=playlistService.findTop3ByOrderByNLikesDesc();
		model.addAttribute("topPlaylists",topPlaylists);


		List<Artist> topArtists=artistService.findTop3ByOrderByFollowersDesc();
		model.addAttribute("topArtists",topArtists);

		List<Tag> topTags=tagService.findTop3ByOrderByNumberTagDesc();
		model.addAttribute("topTags",topTags);



		List<Playlist> playlists=new ArrayList<>();

		Tag t=tagService.findByName(key);

		//codigo para la busqueda por tags
		if(t==null){}else{
			List<Tag> tags=new ArrayList<>();
			tags.add(t);
			playlists=playlistService.findByTagsOfPlaylist(tags);
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
			model.addAttribute("uLogged",userService.findOne(idLogged));
		}

		model.addAttribute("key",key);

		return "searchPlaylist";
	}



}
