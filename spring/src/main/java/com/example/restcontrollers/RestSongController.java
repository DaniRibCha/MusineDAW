package com.example.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.restcontrollers.RestArtistController.ArtistFollowersView;
import com.example.restcontrollers.RestArtistController.ArtistView;
import com.example.restcontrollers.RestPlaylistController.DeletePlaylistView;
import com.example.restcontrollers.RestPlaylistController.MyPlaylistsView;
import com.example.security.UserComponent;
import com.example.services.ArtistService;
import com.example.services.SongService;
import com.example.services.UserService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class RestSongController {
	@Autowired
	private SongService songService;
	@Autowired
	private ArtistService artistService;
	@Autowired
	private UserService userService;
	@Autowired
	private UserComponent userComponent;
	
	
	interface SongView extends Song.Basic, Song.Artists,Artist.Basic{};
	
	@JsonView(SongView.class)
	@RequestMapping("/api/Song/{id}")
	public ResponseEntity<Song> getArtistSongs(@PathVariable long id) throws Exception{
		Song s=songService.findOne(id);
		return new ResponseEntity<>(s,HttpStatus.OK);
	}
	
	@JsonView(SongView.class)
	@RequestMapping("/api/MyFavorites/{id}")
	public ResponseEntity<List<Song>> getFavoritesSong(@PathVariable long id) throws Exception{
		//User uLogged=userComponent.getLoggedUser();
		if(userComponent.getIdLoggedUser()==id){
			User u=userService.findOne(id);
			List<Song> songs=u.getFavoriteSongs();
			return new ResponseEntity<>(songs,HttpStatus.OK);
	} else {
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}
	}
	
	@JsonView(SongView.class)
	@RequestMapping("/api/UserFavorites/{id}")
	public ResponseEntity<List<Song>> getUserFavoritesSong(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		List<Song> songs=u.getFavoriteSongs();
		if(songs!=null){
			return new ResponseEntity<>(songs,HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	interface FavoriteSongView extends Song.Basic, Song.Playlists, Song.Artists{};
		
		@JsonView(FavoriteSongView.class)
		@RequestMapping(value="/api/Song/AddFavorite", method=RequestMethod.POST)
		public ResponseEntity<Song> AddFavoriteSong(@RequestParam long id){
			Song favoriteSong=songService.findOne(id);
			User u=userComponent.getLoggedUser();
			List<Song> l=u.getFavoriteSongs();
			l.add(favoriteSong);
			songService.save(favoriteSong);	
			userService.save(u);
			if (favoriteSong != null) {
				return new ResponseEntity<>(favoriteSong, HttpStatus.OK);
				}
				else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}
	
	@JsonView(FavoriteSongView.class)
	@RequestMapping(value="/api/Song/DeleteFavorite", method=RequestMethod.DELETE)
	public ResponseEntity<Song> DeleteFavoriteSong(@RequestParam long id){
		Song favoriteSong=songService.findOne(id);
		User u=userComponent.getLoggedUser();
		List<Song> l=u.getFavoriteSongs();
		l.remove(favoriteSong);
		songService.save(favoriteSong);	
		userService.save(u);
		if (favoriteSong != null) {
			return new ResponseEntity<>(favoriteSong, HttpStatus.OK);
			}
			else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	

	
}
	

