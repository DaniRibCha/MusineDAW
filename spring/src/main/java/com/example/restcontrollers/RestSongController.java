package com.example.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	
	
	interface SongView extends Song.Basic, Song.Artists,Song.Playlists{};
	
	@JsonView(SongView.class)
	@RequestMapping("/api/Song/{id}")
	public ResponseEntity<Song> getArtistSongs(@PathVariable long id) throws Exception{
		Song s=songService.findOne(id);
		return new ResponseEntity<>(s,HttpStatus.OK);
	}
	
//	interface AddFavoriteSongView extends Song.Basic, Song.Playlists, Song.Artists{};
//		
//		@JsonView(AddFavoriteSongView.class)
//		@RequestMapping(value="/api/AddFavoriteSong/{id}", method=RequestMethod.POST)
//		public ResponseEntity<Song> AddFavoriteSong(@PathVariable long id){
//			Song favoriteSong=songService.findOne(id);
//			User u=userComponent.getLoggedUser();
//			List<Song> l=u.getFavoriteSongs();
//			l.add(favoriteSong);
//			songService.save(favoriteSong);	
//			userService.save(u);
//			if (favoriteSong != null) {
//				return new ResponseEntity<>(favoriteSong, HttpStatus.OK);
//				}
//				else {
//				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//			}
//		}
//	
//	
//	interface DeleteFavoriteSongView extends User.Favorites, Song.Basic, Song.Playlists, Song.Artists{};
//	
//	@JsonView(DeleteFavoriteSongView.class)
//	@RequestMapping(value="/api/DeleteFavoriteSong/{id}", method=RequestMethod.DELETE)
//	public ResponseEntity<Song> DeleteFavoriteSong(@PathVariable long id){
//		Song favoriteSong=songService.findOne(id);
//		User u=userComponent.getLoggedUser();
//		List<Song> l=u.getFavoriteSongs();
//		l.remove(favoriteSong);
//		songService.save(favoriteSong);	
//		userService.save(u);
//		if (favoriteSong != null) {
//			return new ResponseEntity<>(favoriteSong, HttpStatus.OK);
//			}
//			else {
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//		}
//	}
	
	
interface FavoriteNotFavoriteView extends Song.Basic, Song.Favorites,User.Basic{};
	
	@JsonView(FavoriteNotFavoriteView.class)
	@RequestMapping(value="/api/FavoriteNotFavoriteSong/{idSong}", method=RequestMethod.PUT)
	public ResponseEntity<Song> favoriteNotFavoriteSong(@PathVariable long idSong){
		Song s=songService.findOne(idSong);
		if(s!=null){
			long idUser=userComponent.getIdLoggedUser();
			User u=userService.findOne(idUser);
			List<Song> favorites=u.getFavoriteSongs();
			boolean finded=false;
			for(int i=0;i<favorites.size() && !finded;++i){
				if(favorites.get(i).getId_song()==idSong){
					finded=true;
				}
			}
			if(finded){
				u.removeFavoriteSong(s);
				userService.save(u);
				return new ResponseEntity<>(s , HttpStatus.OK);
			}else{
				u.addFavoriteSong(s);
				userService.save(u);
				return new ResponseEntity<>(s , HttpStatus.OK);
			}
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

			
		}

	
}
	

