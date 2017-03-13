package com.example;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
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
		artistRepository.save(a1);
		artistRepository.save(a2);
		artistRepository.save(a3);
		
		Song s1=new Song("closer","https://www.youtube.com/watch?v=RvK8SKZbBWg");
		s1.addArtistsOfSong(a1);
		s1.addArtistsOfSong(a2);
		
		Song s2=new Song("despacito","https://www.youtube.com/watch?v=kJQP7kiw5Fk");
		s2.addArtistsOfSong(a3);
		
		songRepository.save(s1);
		songRepository.save(s2);
		//fin Artista-Canciones
		
		
		//prueba User-Canciones favoritas
		User u1=new User("Davide", "Italy","pass","davide@gmail.com");
		User u2=new User("Dani","Spain","pass","dani@gmail.com");
	
		u1.addFavoriteSong(s1); u1.addFavoriteSong(s2);
		
		
		userRepository.save(u1);
		userRepository.save(u2);
		
		u1.addFollowing(u2);
		u2.addFollowing(u1);
		userRepository.save(u1);
		userRepository.save(u2);
		//fin User-Canciones favoritas
		
		
		//prueba Artistas-Seguidores,Tags
		Tag t1=new Tag("Pop"); Tag t2=new Tag("2016");
		tagRepository.save(t1); tagRepository.save(t2); 
		
		a1.addFollowerOfArtist(u1); a1.addFollowerOfArtist(u2);
		a1.addTagOfArtist(t1); a1.addTagOfArtist(t2);
		artistRepository.save(a1);
		//fin Artistas-Seguidores,Tags

		
		//prueba Usuarios-Playlists creadas
		Playlist pCreated1=new Playlist("myPlaylistCreated1",u1.getName(),u1.getId_user());
		pCreated1.addTagOfPlaylist(t1);
		pCreated1.addSongOfPlaylist(s1);
		playlistRepository.save(pCreated1);
		
		Playlist pCreated2=new Playlist("myPlaylistCreated2",u2.getName(),u2.getId_user());
		pCreated2.addTagOfPlaylist(t2);
		pCreated2.addSongOfPlaylist(s2);
		playlistRepository.save(pCreated2);
		
		Playlist pCreated3=new Playlist("myPlaylistCreated3",u2.getName(),u2.getId_user());
		pCreated3.addTagOfPlaylist(t1);
		pCreated3.addSongOfPlaylist(s1);
		playlistRepository.save(pCreated3);
		
		u1.addCreatedPlaylist(pCreated1);
		u2.addCreatedPlaylist(pCreated2);
		u2.addCreatedPlaylist(pCreated3);
		userRepository.save(u1);userRepository.save(u2);
		// fin Usuarios-Playlists creadas
		
		//prueba Usuarios-Playlists gustadas
		pCreated2.addUserlikeOfPlaylist(u1);
		pCreated1.addUserlikeOfPlaylist(u2);
		playlistRepository.save(pCreated1); playlistRepository.save(pCreated2);
		//fin Usuarios-Playlists gustadas
		
		
	}
	
	
	@RequestMapping("/Playlist/{id}")
	public String songsPlaylist(Model model, @PathVariable long id) {
		
		Playlist p=playlistRepository.findOne(id);
		
		model.addAttribute("p",p);
		
		model.addAttribute("songs", p.getSongsOfPlaylist());
		
		return "Playlist";
	}
	
	@RequestMapping("/SearchPlaylist/{key}")
	public String songsPlaylist(Model model, @PathVariable String key) {
		
		
		model.addAttribute(key);
		
		return "searchPlaylist";
	}
	
	@RequestMapping("/Artist/{id}")
	public String songsArtist(Model model, @PathVariable long id) {
		
		Artist a=artistRepository.findOne(id);
		
		model.addAttribute("a",a);
		
		int n_followers=a.getFollowersOfArtist().size();
		
		model.addAttribute("n_followers",n_followers);
		
		model.addAttribute("songs", a.getSongsOfArtist());
		
		model.addAttribute("tags",a.getTagsOfArtist());
		
		return "Artist";
	}
	
	@RequestMapping("/ArtistFollowers/{id}")
	public String getArtistFollowers(Model model, @PathVariable long id){
		
		Artist a=artistRepository.findOne(id);
		
		model.addAttribute("a",a);
		
		model.addAttribute("followers",a.getFollowersOfArtist());
		
		return "followers_artist";
	}
	
	//el usuario mira sus canciones favoritas
	@RequestMapping("/MyFavorites/{id}")
	public String getMyFavorites(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
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
	@RequestMapping("/MyLikes/{id}")
	public String getMyLikes(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
		model.addAttribute("u",u);
		
		int n_likes=u.getLikedPlaylists().size();
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		model.addAttribute("playlists",u.getLikedPlaylists());
		
		model.addAttribute("n_likes",n_likes);
		
		return "indexUtent_likes";
	}
	
	//el usuario mira sus playlists creadas
	@RequestMapping("/MyPlaylists/{id}")
	public String getMyCreated(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
		model.addAttribute("u",u);
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
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
	@RequestMapping("/MyFollowing/{id}")
	public String getMyFollowing(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
		model.addAttribute("u",u);
		
		model.addAttribute("following",u.getFollowing());
		
		return "my_following_user";
	}
	
	//el usuario mira las canciones favoritas de otro usuario
	@RequestMapping("/UserFavorites/{id}")
	public String getFavoritesByUser(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
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
	public String getUserLikes(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
		model.addAttribute("u",u);
		
		int n_likes=u.getLikedPlaylists().size();
		
		long n_followers=u.getFollowers().size();
		
		model.addAttribute("n_followers",n_followers);
		
		long n_following=u.getFollowing().size();
		
		model.addAttribute("n_following",n_following);
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("n_created",n_created);
		
		model.addAttribute("playlists",u.getLikedPlaylists());
		
		model.addAttribute("n_likes",n_likes);
		
		return "searchUtent_likes";
	}
	
	//el usuario mira las playlists creadas de otro usuario
	@RequestMapping("/UserPlaylists/{id}")
	public String getUserCreated(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
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
		public String getUserFollowers(Model model, @PathVariable long id){
			
			User u=userRepository.findOne(id);
			
			model.addAttribute("u",u);
			
			model.addAttribute("followers",u.getFollowers());
			
			
			return "followers_user";
		}
		
		//el usuario mira sus seguidos
		@RequestMapping("/UserFollowing/{id}")
		public String getUserFollowing(Model model, @PathVariable long id){
			
			User u=userRepository.findOne(id);
			
			model.addAttribute("u",u);
			
			model.addAttribute("following",u.getFollowing());
			
			return "following_user";
		}
		
		@RequestMapping("/CreatePlaylist/{id}")
		public String createPlaylist(Model model, @PathVariable long id){
			
			model.addAttribute("idUser",id);
			
			return "createPlaylist";
		}
		

		//desde la pagina createPlaylist se envian los primeros datos de la playlist a la pagina editPlaylist
		//donde se pueden añadir canciones y modificar tambien los datos basicos
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
			
			model.addAttribute("tag",tag);
			model.addAttribute("p",p);
			
			return "editPlaylist";
		}
		
		
		@RequestMapping("/EditPlaylist/{id}")
		public String editPlaylist(Model model,@PathVariable long id,
				@RequestParam(value = "titleSong", defaultValue = "") String titleSong,
				@RequestParam(value = "artist", defaultValue = "") String artist, 
				@RequestParam(value = "link", defaultValue = "") String link){
			
			Playlist p=playlistRepository.findOne(id);
			
			Tag tag=p.getTagsOfPlaylist().get(0);
			
			if(!titleSong.equals("")){
				Song s=songRepository.findByTitle(titleSong);
				if(s==null){}else{
					p.addSongOfPlaylist(s);
					playlistRepository.save(p);
				}
			}
			
			model.addAttribute("p",p);
			
			model.addAttribute("tag",tag);
			
			model.addAttribute("songs",p.getSongsOfPlaylist());
			
			return "editPlaylist";
		}
		
		@RequestMapping("/Config/{id}")
		public String config(Model model, @PathVariable long id,
				@RequestParam(value = "biography", defaultValue = "") String biography,
				@RequestParam(value = "country", defaultValue = "") String country, 
				@RequestParam(value = "city", defaultValue = "") String city){
			
			User u=userRepository.findOne(id);
			
			if(!biography.equals("")) u.setBiography(biography);
			
			if(!country.equals("")) u.setCountry(country);
			
			if(!city.equals("")) u.setCity(city);
			
			userRepository.save(u);
			
			model.addAttribute("u",u);
			
			return "config";
		}
	
}
