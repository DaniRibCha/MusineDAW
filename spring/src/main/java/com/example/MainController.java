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
		
		List<Artist> artists1=new ArrayList<>();
		artists1.add(a1);
		
		Song s1=new Song("closer","https://www.youtube.com/watch?v=RvK8SKZbBWg");
		s1.setArtistsOfSong(artists1);;
		s1.getArtistsOfSong().add(a2);
		
		List<Artist> artists2=new ArrayList<>();
		artists2.add(a3);
		
		Song s2=new Song("despacito","https://www.youtube.com/watch?v=kJQP7kiw5Fk");
		s2.setArtistsOfSong(artists2);
		
		songRepository.save(s1);
		songRepository.save(s2);
		//fin Artista-Canciones
		
		
		//prueba User-Canciones favoritas
		User u1=new User("Davide", "Italy");
		User u2=new User("Dani","Spain");
		
		List<Song> favorite=new ArrayList<>();
		favorite.add(s1);favorite.add(s2);
		u1.setFavoriteSongs(favorite);
		
		//List<User> following1=new ArrayList<>();
		//following1.add(u2);
		//u1.setFollowing(following1);
		userRepository.save(u1);
		userRepository.save(u2);
		//fin User-Canciones favoritas
		
		
		//prueba Artistas-Seguidores,Tags
		List<User> followers=new ArrayList<>();
		followers.add(u1);followers.add(u2);
		
		List<Tag> tags=new ArrayList<>();
		Tag t1=new Tag("Pop"); Tag t2=new Tag("Rock");
		tagRepository.save(t1); tagRepository.save(t2);
		tags.add(t1); tags.add(t2);
		
		a1.setFollowersOfArtist(followers);
		a1.setTagsOfArtist(tags);
		artistRepository.save(a1);
		//fin Artistas-Seguidores,Tags
		
		//prueba Playlists-Canciones
		Playlist p1=new Playlist("myPlaylist4",u2.getName());
		List<Song> songsPlaylist1=new ArrayList<>();
		songsPlaylist1.add(s1);
		
		p1.setSongsOfPlaylist(songsPlaylist1);
		p1.setTagsOfPlaylist(tags);
		playlistRepository.save(p1);
		//fin Playlist-Canciones
		
		//prueba Usuarios-Playlists gustadas
		//Aqui creo manualmente la playlist, pero se supone que es el usuario que da de alta
		//a la playlist, entonces cada vez que se crea una playlist se debe asignarla
		//a un creator tambien col metodo u.setCreatedPlaylists(List);
		//a la siguiente prueba se hace
		Playlist p2=new Playlist("myPlaylistCreated2",u2.getName());
		p2.setTagsOfPlaylist(tags);
		playlistRepository.save(p2);
		Playlist p3=new Playlist("myPlaylistCreated3",u2.getName());
		p3.setTagsOfPlaylist(tags);
		playlistRepository.save(p3);
		List<Playlist> likedPlaylist=new ArrayList<>();
		likedPlaylist.add(p1); likedPlaylist.add(p2);likedPlaylist.add(p3);
		u1.setLikedPlaylists(likedPlaylist);
		playlistRepository.save(p1);playlistRepository.save(p2);playlistRepository.save(p3);
		userRepository.save(u1);
		//fin Usuarios-Playlists gustadas
		
		//prueba Usuarios-Playlists creadas
		Playlist pCreated1=new Playlist("myPlaylistCreated1",u1.getName());
		pCreated1.setTagsOfPlaylist(tags);
		List<Song> songsPlaylistCreated1=new ArrayList<>();
		songsPlaylistCreated1.add(s1);songsPlaylistCreated1.add(s2);
		pCreated1.setSongsOfPlaylist(songsPlaylistCreated1);
		playlistRepository.save(pCreated1);
		List<Playlist> createdPlaylistUser1=new ArrayList<>();
		createdPlaylistUser1.add(pCreated1);
		List<Playlist> createdPlaylistUser2=new ArrayList<>();
		createdPlaylistUser2.add(p1);createdPlaylistUser2.add(p2);
		u1.setCreatedPlaylists(createdPlaylistUser1);
		u2.setCreatedPlaylists(createdPlaylistUser2);
		userRepository.save(u1);userRepository.save(u2);
		// fin Usuarios-Playlists creadas
		
		//otra prueba Playlist-Likes 
		List<Playlist> playlistLikedByUsers=new ArrayList<>();
		playlistLikedByUsers.add(p1); playlistLikedByUsers.add(p2);playlistLikedByUsers.add(pCreated1);
		u2.setLikedPlaylists(playlistLikedByUsers);
		playlistRepository.save(pCreated1);playlistRepository.save(p1);playlistRepository.save(p2);
		userRepository.save(u2);
		//fin Playlist-Likes 
		
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
