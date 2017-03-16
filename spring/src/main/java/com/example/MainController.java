package com.example;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.annotation.JsonView;



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
	
	
	@PostConstruct
	public void init(){
		
		//prueba Artistas-Canciones
				Artist a1=new Artist("ChainSmokers","USA");
				Artist a2=new Artist("Halsey","USA");
				Artist a3=new Artist("Luis Fonsi","Puerto Rico");
				Artist a4=new Artist("Ed Sheeran", "U.K.");
				Artist a5=new Artist("Dave Moisan", "USA");
				Artist a6=new Artist("Coldplay", "USA");
				Artist a7=new Artist("Panic! At The Disco", "USA");
				Artist a8=new Artist("Fall Out Boy", "USA");
				Artist a9=new Artist("Maroon 5", "USA");
				Artist a10=new Artist("Charlie Puth", "USA");
				Artist a11=new Artist("Selena Gomez", "USA");
				Artist a12=new Artist("Twenty One Pilots", "USA");
				Artist a13=new Artist("Chino y Nacho", "Venezuela");
				Artist a14=new Artist("Tyler Ward", "USA");
				Artist a15=new Artist("Shakira", "Colombia");
				Artist a16=new Artist("The Script", "Ireland");
				Artist a17=new Artist("Elvis Presley", "USA");
				Artist a18=new Artist("Nickelback", "USA");
				Artist a19=new Artist("Carlos Vives", "Colombia");
				Artist a20=new Artist("Lukas Graham", "USA");
				Artist a21=new Artist("David Bisbal", "España");
				Artist a22=new Artist("Dvicio", "España");
				Artist a23=new Artist("Daughtry", "USA");
				
				
				artistRepository.save(a1);
				artistRepository.save(a2);
				artistRepository.save(a3);
				artistRepository.save(a4);
				artistRepository.save(a5);
				artistRepository.save(a6);
				artistRepository.save(a7);
				artistRepository.save(a8);
				artistRepository.save(a9);
				artistRepository.save(a10);
				artistRepository.save(a11);
				artistRepository.save(a12);
				artistRepository.save(a13);
				artistRepository.save(a14);
				artistRepository.save(a15);
				artistRepository.save(a16);
				artistRepository.save(a17);
				artistRepository.save(a18);
				artistRepository.save(a19);
				artistRepository.save(a20);
				artistRepository.save(a21);
				artistRepository.save(a22);
				artistRepository.save(a23);
				
				Song s1=new Song("closer","https://www.youtube.com/watch?v=RvK8SKZbBWg");
				s1.addArtistsOfSong(a1);
				s1.addArtistsOfSong(a2);
				
				Song s2=new Song("despacito","https://www.youtube.com/watch?v=kJQP7kiw5Fk");
				s2.addArtistsOfSong(a3);
				
				Song s3=new Song("new man","https://www.youtube.com/watch?v=EwzD8U4u76k");
				s3.addArtistsOfSong(a4);
				
				Song s4=new Song("mexico","https://www.youtube.com/watch?v=rg1aIYhgexU");
				s4.addArtistsOfSong(a5);
				
				Song s5=new Song("control","https://www.youtube.com/watch?v=so8V5dAli-Q");
				s5.addArtistsOfSong(a2);
				
				Song s6=new Song("something just lie this","https://www.youtube.com/watch?v=FM7MFYoylVs");
				s6.addArtistsOfSong(a1);
				s6.addArtistsOfSong(a6);
				
				Song s7=new Song("death of a bachelor","https://www.youtube.com/watch?v=R03cqGg40GU");
				s7.addArtistsOfSong(a7);
				
				Song s8=new Song("immortals","https://www.youtube.com/watch?v=l9PxOanFjxQ");
				s8.addArtistsOfSong(a8);
				
				Song s9=new Song("dance, dance","https://www.youtube.com/watch?v=C6MOKXm8x50");
				s9.addArtistsOfSong(a8);
				
				Song s10=new Song("don't wanna know","https://www.youtube.com/watch?v=ANS9sSJA9Yc");
				s10.addArtistsOfSong(a9);
				
				Song s11=new Song("we don't talk anymore","https://www.youtube.com/watch?v=3AtDnEC4zak");
				s11.addArtistsOfSong(a10);
				s11.addArtistsOfSong(a11);
				
				Song s12=new Song("the heart wants what it wants","https://www.youtube.com/watch?v=ij_0p_6qTss");
				s12.addArtistsOfSong(a11);
				
				Song s13=new Song("sugar","https://www.youtube.com/watch?v=09R8_2nJtjg");
				s13.addArtistsOfSong(a9);
				
				Song s14=new Song("galway girl","https://www.youtube.com/watch?v=gL-WVjvzu34");
				s14.addArtistsOfSong(a4);
				
				Song s15=new Song("corazon en la maleta","https://www.youtube.com/watch?v=oX0jcZQ16ew");
				s15.addArtistsOfSong(a3);
				
				Song s16=new Song("hymn for the weekend","https://www.youtube.com/watch?v=YykjpeuMNEk");
				s16.addArtistsOfSong(a6);
				
				Song s17=new Song("dangerously","https://www.youtube.com/watch?v=TBXQu8ORnBQ");
				s17.addArtistsOfSong(a10);
				
				Song s18=new Song("don't wanna know","https://www.youtube.com/watch?v=ANS9sSJA9Yc&spfreload=10");
				s18.addArtistsOfSong(a9);
				
				Song s19=new Song("stressed out","https://www.youtube.com/watch?v=pXRviuL6vMY");
				s19.addArtistsOfSong(a12);
				
				Song s20=new Song("my songs know what you did in the dark","https://www.youtube.com/watch?v=LkIWmsP3c_s");
				s20.addArtistsOfSong(a8);
				
				Song s21=new Song("kill em with kindness","https://www.youtube.com/watch?v=HHP5MKgK0o8");
				s21.addArtistsOfSong(a11);
				
				Song s22=new Song("grave","https://www.youtube.com/watch?v=zxVzHBcwzL0");
				s22.addArtistsOfSong(a5);
				
				Song s23=new Song("i write sins not tragedies","https://www.youtube.com/watch?v=vc6vs-l5dkc");
				s23.addArtistsOfSong(a7);
				
				songRepository.save(s1);
				songRepository.save(s2);
				songRepository.save(s3);
				songRepository.save(s4);
				songRepository.save(s5);
				songRepository.save(s6);
				songRepository.save(s7);
				songRepository.save(s8);
				songRepository.save(s9);
				songRepository.save(s10);
				songRepository.save(s11);
				songRepository.save(s12);
				songRepository.save(s13);
				songRepository.save(s14);
				songRepository.save(s15);
				songRepository.save(s16);
				songRepository.save(s17);
				songRepository.save(s18);
				songRepository.save(s19);
				songRepository.save(s20);
				songRepository.save(s21);
				songRepository.save(s22);
				songRepository.save(s23);
				//fin Artista-Canciones

		
		
		//Users
		User u1=new User("Davide", "Italy","pass","davide@gmail.com");
		User u2=new User("Dani","Spain","pass","dani@gmail.com");
		User u3=new User("Ruben","Spain","pass","ruben@gmail.com");
		User u4=new User("Stephanie","Venezuela","pass","stephanie@gmail.com");
		User u5=new User("Carlos","Mexico","pass","carlos@gmail.com");
		User u6=new User("Patricia","Republica Dominicana","pass","patricia@gmail.com");
		User u7=new User("Peter","USA","pass","peter@gmail.com");
		User u8=new User("Manuel","Colombia","pass","manuel@gmail.com");
		User u9=new User("Elizabeth","U.K.","pass","elizabeth@gmail.com");
		User u10=new User("Ingrid","Mexico","pass","ingrid@gmail.com");
		User u11=new User("Paul","Ecuador","pass","paul@gmail.com");
		User u12=new User("Luis","Argentina","pass","luis@gmail.com");
		User u13=new User("Liam","Australia","pass","liam@gmail.com");
		User u14=new User("Felix","Chile","pass","felix@gmail.com");
		User u15=new User("Laura","Bolivia","pass","laura@gmail.com");
		User u16=new User("Gabriela","Panama","pass","gabriela@gmail.com");
		User u17=new User("Sofia","Cuba","pass","sofia@gmail.com");
		User u18=new User("Michelle","Francia","pass","michelle@gmail.com");
		User u19=new User("David","Peru","pass","david@gmail.com");
		User u20=new User("Alejandro","Puerto Rico","pass","alejandro@gmail.com");
		User u21=new User("Pablo","Mexico","pass","pablo@gmail.com");
		User u22=new User("Bob","Jamaica","pass","bob@gmail.com");
		User u23=new User("Maria","Belice","pass","maria@gmail.com");
		User u24=new User("Juan","Venezuela","pass","juan@gmail.com");
		
		//prueba User-Canciones favoritas
		u1.addFavoriteSong(s1); //u1.addFavoriteSong(s2);
		
		userRepository.save(u1);userRepository.save(u2);
		userRepository.save(u3);userRepository.save(u4);
		userRepository.save(u5);userRepository.save(u6);
		userRepository.save(u7);userRepository.save(u8);
		userRepository.save(u9);userRepository.save(u10);
		userRepository.save(u11);userRepository.save(u12);
		userRepository.save(u13);userRepository.save(u14);
		userRepository.save(u15);userRepository.save(u16);
		userRepository.save(u17);userRepository.save(u18);
		userRepository.save(u19);userRepository.save(u20);
		userRepository.save(u21);userRepository.save(u22);
		userRepository.save(u23);userRepository.save(u24);
		
		u1.addFollowing(u2);
		//u1.addFollowing(u3);
		u1.addFollowing(u4);
		userRepository.save(u1);
		
		u2.addFollowing(u1);
		//u2.addFollowing(u3);
		userRepository.save(u2);
		
		u3.addFollowing(u1);
		u3.addFollowing(u2);
		u3.addFollowing(u4);
		userRepository.save(u3);
		
		u4.addFollowing(u1);
		u4.addFollowing(u2);
		u4.addFollowing(u3);
		u4.addFollowing(u5);
		u4.addFollowing(u6);
		u4.addFollowing(u7);
		u4.addFollowing(u8);
		u4.addFollowing(u9);
		u4.addFollowing(u10);
		u4.addFollowing(u11);
		u4.addFollowing(u12);
		u4.addFollowing(u13);
		u4.addFollowing(u14);
		u4.addFollowing(u15);
		u4.addFollowing(u16);
		u4.addFollowing(u17);
		u4.addFollowing(u18);
		u4.addFollowing(u19);
		u4.addFollowing(u20);
		u4.addFollowing(u21);
		u4.addFollowing(u22);
		u4.addFollowing(u23);
		
		userRepository.save(u4);
		//fin User-Canciones favoritas
		
		
		//prueba Artistas-Seguidores,Tags
		Tag t1=new Tag("Pop"); Tag t2=new Tag("2016");
		tagRepository.save(t1); tagRepository.save(t2); 
		Tag t3=new Tag("2015"); Tag t4=new Tag("Latino");
		tagRepository.save(t3); tagRepository.save(t4); 
		
		a1.addFollowerOfArtist(u1); a1.addFollowerOfArtist(u2);
		a1.addTagOfArtist(t1); a1.addTagOfArtist(t2);
		tagRepository.save(t1);tagRepository.save(t2);
		artistRepository.save(a1);
		//fin Artistas-Seguidores,Tags

		
		//prueba Usuarios-Playlists creadas
		Playlist pCreated1=new Playlist("myPlaylistCreated1",u1.getName(),u1.getId_user());
		pCreated1.addTagOfPlaylist(t1);
		pCreated1.addSongOfPlaylist(s1);
		tagRepository.save(t1);
		playlistRepository.save(pCreated1);
		
		Playlist pCreated2=new Playlist("myPlaylistCreated2",u2.getName(),u2.getId_user());
		pCreated2.addTagOfPlaylist(t2);
		pCreated2.addSongOfPlaylist(s2);
		pCreated2.addSongOfPlaylist(s1);
		tagRepository.save(t2);
		playlistRepository.save(pCreated2);
		
		Playlist pCreated3=new Playlist("myPlaylistCreated3",u2.getName(),u2.getId_user());
		pCreated3.addTagOfPlaylist(t1);
		pCreated3.addSongOfPlaylist(s1);
		tagRepository.save(t1);
		playlistRepository.save(pCreated3);
		
		Playlist pCreated4=new Playlist("myPlaylistCreated4",u1.getName(),u1.getId_user());
		pCreated4.addTagOfPlaylist(t1);pCreated4.addTagOfPlaylist(t4);
		pCreated4.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		playlistRepository.save(pCreated4);
		
		u1.addCreatedPlaylist(pCreated1);
		u2.addCreatedPlaylist(pCreated2);
		u2.addCreatedPlaylist(pCreated3);
		u1.addCreatedPlaylist(pCreated4);
		userRepository.save(u1);userRepository.save(u2);
		// fin Usuarios-Playlists creadas
		
		//prueba Usuarios-Playlists gustadas
		pCreated2.addUserlikeOfPlaylist(u1);
		pCreated1.addUserlikeOfPlaylist(u2);
		pCreated1.addUserlikeOfPlaylist(u2);
		playlistRepository.save(pCreated1); playlistRepository.save(pCreated2);
		//fin Usuarios-Playlists gustadas
		
		
	}
	
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
	public String songsPlaylist(Model model, HttpSession session, @PathVariable long id,
			@RequestParam(value = "favorite", required=false) String favoriteTitle,
			@RequestParam(value = "like", required=false, defaultValue="") String like) {
		
		boolean login=false;
		
		//si la sesion noes nueva y tiene el id de usuario logeado
		//añadida del id del usuario logeado al modelo
		if(!session.isNew() && session.getAttribute("idUser")!=null){
			login=true;
			model.addAttribute("idUser",session.getAttribute("idUser"));
		}
			
		
		model.addAttribute("login",login);
		Playlist p=playlistRepository.findOne(id);
		
		if(login){
			long idLogged=((Long)(session.getAttribute("idUser")));
			User uLogged=userRepository.findOne(idLogged);
			
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
			
			if(p.getId_playlist()==idLogged)
				model.addAttribute("findedLogged",true);
			
			
				
		}
		
		
		List<Song> songs= p.getSongsOfPlaylist();
		
		if(login){
			if(favoriteTitle==null){
			}else{
				long idLogged=((Long)(session.getAttribute("idUser")));
				Song s=songRepository.findByTitle(favoriteTitle);
				User u=userRepository.findOne(idLogged);
				u.addFavoriteSong(s);
				userRepository.save(u);
			}
		}
		
		boolean findedFavorite=false;
		//codigo para devolver si la cancion esta en los favoritos
		//del usuario logeado
		if(login && session.getAttribute("idUser")!=null){//si un usuario esta logeado
			long idLogged=((Long)(session.getAttribute("idUser")));
			List<User> users=new ArrayList<>();
			Song s;
			for(int i=0;i<songs.size();++i){
				s=songs.get(i);
				users=s.getUsersFavoriteSong();
				findedFavorite=false;
				//para cada usuario que tiene esa cancion en los favoritos
				//si es el usuario logeado se pone el atributo boolean
				//de la cancion a true->la plantilla chequea ese atributo
				for(int j=0;j<users.size() && !findedFavorite;++j){
					if(users.get(j).getId_user()==idLogged){
						s.setIdLogged(true);
						findedFavorite=true;
					}
				}
				

			}
		}
		
		model.addAttribute("findedFavorite",findedFavorite);
		
		
		
		model.addAttribute("songs",songs);
		
		List<Playlist> topPlaylists=new ArrayList<>();
		
		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
		
		model.addAttribute("topPlaylists",topPlaylists);
		
		
		
		
		
		model.addAttribute("p",p);
		
		return "Playlist";
	}
	
	@RequestMapping("/Artist/{id}")
	public String songsArtist(Model model, @PathVariable long id, HttpSession session,
			@RequestParam(value = "favorite", required=false) String favoriteTitle,
			@RequestParam(value = "follow", required=false) String followName) {
		
		boolean login=false;
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(!session.isNew() && session.getAttribute("idUser")!=null){
			login=true;
			model.addAttribute("idUser",session.getAttribute("idUser"));
			long idUserLogged=((Long)(session.getAttribute("idUser")));
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
		
		if(favoriteTitle==null){
		}else{
			long idLogged=((Long)(session.getAttribute("idUser")));
			Song s=songRepository.findByTitle(favoriteTitle);
			User u=userRepository.findOne(idLogged);
			u.addFavoriteSong(s);
			userRepository.save(u);
		}
		
		//codigo para devolver si la cancion esta en los favoritos
				//del usuario logeado
				if(login){//si un usuario esta logeado
					long idLogged=((Long)(session.getAttribute("idUser")));
					boolean finded;
					List<User> users=new ArrayList<>();
					Song s;
					for(int i=0;i<songs.size();++i){
						s=songs.get(i);
						users=s.getUsersFavoriteSong();
						finded=false;
						//para cada usuario que tiene esa cancion en los favoritos
						//si es el usuario logeado se pone el atributo boolean
						//de la cancion a true->la plantilla chequea ese atributo
						for(int j=0;j<users.size() && !finded;++j){
							if(users.get(j).getId_user()==idLogged){
								s.setIdLogged(true);
								finded=true;
							}
						}

					}
				}
		
		model.addAttribute("songs", songs);
		
		model.addAttribute("tags",a.getTagsOfArtist());
		
		List<Playlist> topPlaylists=new ArrayList<>();
		
		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
		
		model.addAttribute("topPlaylists",topPlaylists);
		
		List<Artist> relatedArtists=new ArrayList<>();
		
		return "Artist";
	}
	
	//paginacion artistas
	@RequestMapping("/ArtistListBasic")
	public String getPlaylistBasic(Model model, Pageable page){
	
		Page<Artist> artist = artistRepository.findAll(page);
		model.addAttribute("variable", "artistas");
		model.addAttribute("pagina", "ArtistListBasic");
		model.addAttribute("contenido", artist);
		model.addAttribute("showPrev", !artist.isFirst());
		model.addAttribute("showNext", !artist.isLast());
		model.addAttribute("nextPage", artist.getNumber()+1);
		model.addAttribute("prevPage", artist.getNumber()-1);
		return "paginacion";
	}
	
	@RequestMapping("/ArtistFollowers/{id}")
	public String getArtistFollowers(Model model, @PathVariable long id, HttpSession session){
		
		boolean login=false;
		
		//si la sesion noes nueva y tiene el id de usuario logeado
		//añadida del id del usuario logeado al modelo
		if(!session.isNew() && session.getAttribute("idUser")!=null){
			login=true;
			model.addAttribute("idUser",session.getAttribute("idUser"));
		}
		
		Artist a=artistRepository.findOne(id);
		
		model.addAttribute("a",a);
		
		model.addAttribute("followers",a.getFollowersOfArtist());
		
		return "followers_artist";
	}
	
	//el usuario mira sus canciones favoritas
	//pagina privada usuario
	@RequestMapping("/MyFavorites/{id}")
	public String getMyFavorites(Model model, @PathVariable long id,
			@RequestParam(value = "favorite", required=false) String favoriteTitle){
		
		User u=userRepository.findOne(id);
		//si hay el titulo en el RequestParam->borrar cancion de favoritos
		if(favoriteTitle==null){}else{
			Song s=songRepository.findByTitle(favoriteTitle);
			u.removeFavoriteSong(s);
			userRepository.save(u);
		}
			
		model.addAttribute("u",u);
		
		int n_favorites=u.getFavoriteSongs().size();
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
		model.addAttribute("songs",u.getFavoriteSongs());
		
		model.addAttribute("n_favorites",n_favorites);
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		return "indexUtent_favorites";
	}
	
	//el usuario mira sus playlists gustadas
	//pagina privada usuario
	@RequestMapping("/MyLikes/{id}")
	public String getMyLikes(Model model, @PathVariable long id,
			@RequestParam(value = "like", required=false ) Long likeIdPlaylist){
		
		User u=userRepository.findOne(id);
		
		model.addAttribute("u",u);
		
		int n_likes=u.getLikedPlaylists().size();
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		List<Playlist> likedPlaylists=u.getLikedPlaylists();
		
		if(likeIdPlaylist==null){
		}else{
			Playlist p=playlistRepository.findOne(likeIdPlaylist);
			p.removeUserlikeOfPlaylist(u);
			playlistRepository.save(p);
			likedPlaylists.remove(p);
		}
		
		//codigo para trazar la ruta del creador de la playlist
		//si el creador es el usuario logueado->la plantilla pone
		//ruta="MyPlaylists/{id}" sino "UserPlaylists/{id}" 
		for(int i=0;i<likedPlaylists.size();++i){
			Playlist p=likedPlaylists.get(i);
			if(p.getCreatorId()==id){
				p.setIdLogged(true);
			}
		}
		
		model.addAttribute("playlists",likedPlaylists);
		
		model.addAttribute("n_likes",n_likes);
		
		return "indexUtent_likes";
	}
	
	//el usuario mira sus playlists creadas
	//pagina provada usuario
	@RequestMapping("/MyPlaylists/{id}")
	public String getMyCreated(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
		model.addAttribute("u",u);
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
		//aqui no hace falta trazar la ruta dinamica porque en esa pagina
		//siempre esta la ruta="MyPlaylists/{id}" (siempre el usuario es el creador)
		model.addAttribute("playlists",u.getCreatedPlaylists());
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		int n_likes=u.getLikedPlaylists().size();
		
		model.addAttribute("n_likes",n_likes);
		
		return "indexUtent_playlist";
	}
	
	//el usuario mira sus seguidores
	@RequestMapping("/MyFollowers/{id}")
	public String getMyFollowers(Model model, @PathVariable long id){
		
		
		User u=userRepository.findOne(id);
		
		
		model.addAttribute("u",u);
		
		model.addAttribute("followers",u.getFollowers());
		
		
		return "my_followers_user";
	}
	
	//el usuario mira sus seguidos
	//pagina privada usuario
	@RequestMapping("/MyFollowing/{id}")
	public String getMyFollowing(Model model, @PathVariable long id, 
			@RequestParam(value = "follow", required=false) String followName){
		
		User u=userRepository.findOne(id);
		
		//codigo para borrar un seguido desde le pagina following
		//si en el RequestParam hay el nombre del usuario
		//se borra de los seguidores
		if(followName==null){}else{
			User u1=userRepository.findByName(followName);
			u.removeFollowing(u1);
			userRepository.save(u);userRepository.save(u1);
		}
		
		
		model.addAttribute("u",u);
		
		model.addAttribute("following",u.getFollowing());
		
		return "my_following_user";
	}
	
	//el usuario mira las canciones favoritas de otro usuario (pagina No privada)
	@RequestMapping("/UserFavorites/{id}")
	public String getFavoritesByUser(Model model, @PathVariable long id, HttpSession session,
			@RequestParam(value = "follow", required=false) String followName){

		User u=userRepository.findOne(id);
		
		boolean login=false;
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(!session.isNew() && session.getAttribute("idUser")!=null){
			login=true;
			long idUserLogged=((Long)(session.getAttribute("idUser")));
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
			
			model.addAttribute("idUser",idUserLogged);
			
		}
		
		model.addAttribute("login",login);
		
		model.addAttribute("u",u);
		
		int n_favorites=u.getFavoriteSongs().size();
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
		model.addAttribute("songs",u.getFavoriteSongs());
		
		model.addAttribute("n_favorites",n_favorites);
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		return "searchUtent_favorites";
	}
	
	//el usuario mira las playlists gustadas de otro usuario
	@RequestMapping("/UserLikes/{id}")
	public String getUserLikes(Model model, @PathVariable long id,HttpSession session,
			@RequestParam(value = "follow", required=false) String followName){
		
		User u=userRepository.findOne(id);
		
		boolean login=false;
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(!session.isNew() && session.getAttribute("idUser")!=null){
			login=true;
			long idUserLogged=((Long)(session.getAttribute("idUser")));
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
			
			model.addAttribute("idUser",idUserLogged);
			
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
			long idLogged=((Long)(session.getAttribute("idUser")));
			
			for(int i=0;i<likedPlaylists.size();++i){
				Playlist p=likedPlaylists.get(i);
				if(p.getCreatorId()==idLogged){
					//si el usuario logueado es el creador le pone a la clase
					//el atributo idLogged=true
					//la plantilla mira ese atributo para trazar la ruta dinamica
					p.setIdLogged(true);
				}
			}
		}
		
		model.addAttribute("playlists",likedPlaylists);
		
		model.addAttribute("n_likes",n_likes);
		
		return "searchUtent_likes";
	}
	
	//el usuario mira las playlists creadas de otro usuario
	@RequestMapping("/UserPlaylists/{id}")
	public String getUserCreated(Model model, @PathVariable long id, HttpSession session,
		@RequestParam(value = "follow", required=false) String followName){
		
		User u=userRepository.findOne(id);
		
		
		boolean login=false;
		//codigo para poner la posibilidad de seguir y no seguir en la
		//pagina publica de los otros usuarios
		if(!session.isNew() && session.getAttribute("idUser")!=null){
			login=true;
			long idUserLogged=((Long)(session.getAttribute("idUser")));
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
			
			model.addAttribute("idUser",idUserLogged);
			
		}
		
		model.addAttribute("login",login);
		
		model.addAttribute("u",u);
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
		model.addAttribute("playlists",u.getCreatedPlaylists());
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		return "searchUtent_playlist";
	}
	
	//el usuario mira los seguidores de otro usuario
		@RequestMapping("/UserFollowers/{id}")
		public String getUserFollowers(Model model, @PathVariable long id, HttpSession session){
			
			boolean login=false;
			//si la sesion noes nueva y tiene el id de usuario logeado
			//añadida del id del usuario logeado al modelo
			if(!session.isNew() && session.getAttribute("idUser")!=null){
				login=true;
				model.addAttribute("idUser",session.getAttribute("idUser"));
			}
			
			model.addAttribute("login",login);
			
			User u=userRepository.findOne(id);
			
			model.addAttribute("u",u);
			
			model.addAttribute("followers",u.getFollowers());
			
			
			return "followers_user";
		}
		
		//el usuario mira los seguidos de otro usuario, pagina NO privada
		@RequestMapping("/UserFollowing/{id}")
		public String getUserFollowing(Model model, @PathVariable long id, HttpSession session, Pageable page){
			
			Page<User> user = userRepository.findAll(page);
			
			boolean login=false;
			//si la sesion noes nueva y tiene el id de usuario logeado
			//añadida del id del usuario logeado al modelo
			if(!session.isNew() && session.getAttribute("idUser")!=null){
				login=true;
				model.addAttribute("idUser",session.getAttribute("idUser"));
			}
			
			model.addAttribute("login",login);
			
			User u=userRepository.findOne(id);
			
			model.addAttribute("u",u);
			
			//model.addAttribute("following",u.getFollowing());
			
			//Paginacion
			model.addAttribute("ident", id);
			model.addAttribute("following",user);
			model.addAttribute("showPrev", !user.isFirst());
			model.addAttribute("showNext", !user.isLast());
			model.addAttribute("nextPage", user.getNumber()+1);
			model.addAttribute("prevPage", user.getNumber()-1);
			
			return "following_user";
		}
		
		//id->isUser
		//pagina privada
		@RequestMapping("/CreatePlaylist/{id}")
		public String createPlaylist(Model model, @PathVariable long id){
			
			model.addAttribute("idUser",id);
			
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
			
			User u=userRepository.findOne(idUser);
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
			
			userRepository.save(u);
			
			model.addAttribute("u",u);
			model.addAttribute("tag",tag);
			model.addAttribute("p",p);
			
			return "editPlaylist";
		}
		
		
		@RequestMapping("/EditPlaylist/{id}")
		public String editPlaylist(Model model,@PathVariable long id,
				@RequestParam(value = "title", defaultValue = "") String title,
				@RequestParam(value = "description", defaultValue = "") String description, 
				@RequestParam(value = "tag", defaultValue = "") String tag,
				@RequestParam(value = "titleSong", defaultValue = "") String titleSong,
				@RequestParam(value = "artist", defaultValue = "") String artist, 
				@RequestParam(value = "link", defaultValue = "") String link){
			
			Playlist p=playlistRepository.findOne(id);
		
			if(!tag.equals("")){//si hay modifica del tag
				Tag t=tagRepository.findByName(tag);
				if(t==null){//si no hay ese tag lo crea
					t=new Tag(tag);
					tagRepository.save(t);
				}
				p.getTagsOfPlaylist().remove(0);
				p.addTagOfPlaylist(t);
				tagRepository.save(t);
				playlistRepository.save(p);
			}
			
			//codigo para dar de alta a una cancion en la playlist
			if(!titleSong.equals("")){//si hay el titulo en el RequestParam
				Song s=songRepository.findByTitle(titleSong);//busca la cancion desde el repositorio
				if(s==null){}else{
					p.addSongOfPlaylist(s);
					playlistRepository.save(p);
				}
			}
			
			if (!title.equals("")) p.setTitle(title);
			if (!description.equals(""))p.setDescription(description);
			playlistRepository.save(p);
			
			long creator=p.getCreatorId();
			
			User u=userRepository.findOne(creator);
			
			model.addAttribute("u",u);
			
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
				@RequestParam(value = "city", defaultValue = "") String city){
			
			User u=userRepository.findOne(id);
			
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
		public String serachPlaylist(Model model, HttpSession session,
				@RequestParam(value = "key", defaultValue = "") String key){
			
			boolean login=false;
			//si la sesion noes nueva y tiene el id de usuario logeado
			//añadida del id del usuario logeado al modelo
			if(!session.isNew() && session.getAttribute("idUser")!=null){
				login=true;
				model.addAttribute("idUser",session.getAttribute("idUser"));
			}
			
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
					long idLogged=((Long)(session.getAttribute("idUser")));
					
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
					long idLogged=((Long)(session.getAttribute("idUser")));
					
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
			
//			if(a==null && pList==null && t==null) {
//				model.addAttribute("nothing",true);
//			}
//			else {
//				model.addAttribute("nothing",false);
//			}
			
			
			model.addAttribute("key",key);
			
			return "searchPlaylist";
		}
		
		//busqueda desde un tag
		@RequestMapping("/SearchPlaylist/{key}")
		public String serachPlaylistTag(Model model, HttpSession session,
				@PathVariable String key){
			
			boolean login=false;
			//si la sesion noes nueva y tiene el id de usuario logeado
			//añadida del id del usuario logeado al modelo
			if(!session.isNew() && session.getAttribute("idUser")!=null){
				login=true;
				model.addAttribute("idUser",session.getAttribute("idUser"));
			}
			
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
				//chequea el atributo booelan idLogged
				//para trazar la ruta dinamica de cada playlist desde la plantilla
				if(login){
					long idLogged=((Long)(session.getAttribute("idUser")));
					
					for(int i=0;i<playlists.size();++i){
						Playlist p=playlists.get(i);
						if(p.getCreatorId()==idLogged){
							p.setIdLogged(true);;
						}
					}
				}
				model.addAttribute("playlistsTag",playlists);
			}
			
			
			model.addAttribute("key",key);
			
			return "searchPlaylist";
		}
	
	
}
