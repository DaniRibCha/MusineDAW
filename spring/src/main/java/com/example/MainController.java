package com.example;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

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
		User u1=new User("Davide", "Italy");
		User u2=new User("Dani","Spain");
	
		u1.addFavoriteSong(s1); u1.addFavoriteSong(s2);
		
		
		userRepository.save(u1);
		userRepository.save(u2);
		
		u1.addFollowing(u2);
		u2.addFollowing(u1);
		userRepository.save(u1);
		userRepository.save(u2);
		//fin User-Canciones favoritas
		
		
		//prueba Artistas-Seguidores,Tags
		Tag t1=new Tag("Pop"); Tag t2=new Tag("Rock");
		tagRepository.save(t1); tagRepository.save(t2); 
		
		a1.addFollowerOfArtist(u1); a1.addFollowerOfArtist(u2);
		a1.addTagOfArtist(t1); a1.addTagOfArtist(t2);
		artistRepository.save(a1);
		//fin Artistas-Seguidores,Tags

		
		//prueba Usuarios-Playlists creadas
		Playlist pCreated1=new Playlist("myPlaylistCreated1",u1.getName());
		pCreated1.addTagOfPlaylist(t1);
		pCreated1.addSongOfPlaylist(s1);
		playlistRepository.save(pCreated1);
		
		Playlist pCreated2=new Playlist("myPlaylistCreated2",u2.getName());
		pCreated2.addTagOfPlaylist(t2);
		pCreated2.addSongOfPlaylist(s2);
		playlistRepository.save(pCreated2);
		
		u1.addCreatedPlaylist(pCreated1);
		u2.addCreatedPlaylist(pCreated2);
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
	
	@RequestMapping("/UserFavorites/{id}")
	public String favoritesByUser(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
		model.addAttribute("u",u);
		
		int n_favorites=u.getFavoriteSongs().size();
		
		model.addAttribute("songs",u.getFavoriteSongs());
		
		model.addAttribute("n_favorites",n_favorites);
		
		return "indexUtent_favoritos";
	}
	
	@RequestMapping("/UserLikes/{id}")
	public String likesByUser(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
		model.addAttribute("u",u);
		
		int n_likes=u.getLikedPlaylists().size();
		
		model.addAttribute("playlists",u.getLikedPlaylists());
		
		model.addAttribute("n_likes",n_likes);
		
		return "indexUtent_likes";
	}
	
	@RequestMapping("/UserPlaylists/{id}")
	public String createdByUser(Model model, @PathVariable long id){
		
		User u=userRepository.findOne(id);
		
		model.addAttribute("u",u);
		
		int n_created=u.getCreatedPlaylists().size();
		
		model.addAttribute("playlists",u.getCreatedPlaylists());
		
		model.addAttribute("n_created",n_created);
		
		return "indexUtent_playlist";
	}
	
	
	
	
	
	
}
