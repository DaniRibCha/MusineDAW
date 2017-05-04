package com.example.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.ArtistRepository;
import com.example.security.UserComponent;
import com.example.services.ArtistService;
import com.example.services.UserService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class RestArtistController {

	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired 
	UserService userService;
	
	
	
	interface ArtistView extends Artist.Basic, Artist.Songs,Artist.Followers,User.Basic,Artist.Tags, Song.Basic,Tag.Basic{};
	
	@JsonView(ArtistView.class)
	@RequestMapping("/api/Artist/{id}")
	public ResponseEntity<Artist> getArtistSongs(@PathVariable long id) throws Exception{
		Artist a=artistService.findOne(id);
		return new ResponseEntity<>(a,HttpStatus.OK);
	}
	
	interface ArtistBasicView extends Artist.Basic{};
	
	@JsonView(ArtistBasicView.class)
	@RequestMapping("/api/Artist/Top3")
	public ResponseEntity<List<Artist>> getTopArtists() throws Exception{
		List<Artist> topArtists=artistService.findTop3ByOrderByFollowersDesc();
		return new ResponseEntity<>(topArtists,HttpStatus.OK);
	}
	

	interface ArtistFollowersView extends Artist.Basic,Artist.Followers,User.Basic{};
	
	@JsonView(ArtistFollowersView.class)
	@RequestMapping("/api/ArtistFollowers/{id}")
	public ResponseEntity<List<User>> getArtistFollowers(@PathVariable long id) throws Exception{
		Artist a=artistService.findOne(id);
		if(a!=null){
			return new ResponseEntity<>(a.getFollowersOfArtist(),HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	interface ArtistFollowingByUserView extends Artist.Basic,User.Basic{};
	
	@JsonView(ArtistFollowingByUserView.class)
	@RequestMapping(value="/api/ArtistFollowedByUser/{id}",method=RequestMethod.GET)
	public ResponseEntity<List<Artist>> getArtistFollowedUser(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		if(u!=null){
			return new ResponseEntity<>(u.getFollowingArtists(),HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	interface ArtistSongsView extends Artist.Songs, Artist.Basic, Song.Basic{}
	
	@JsonView(ArtistSongsView.class)
	@RequestMapping("/api/SongsOfArtist/{id}")
	public ResponseEntity<List<Song>> getSongsOfArist(@PathVariable long id) throws Exception{
		Artist a= artistService.findOne(id);
		List<Song> songs=a.getSongsOfArtist();
		return new ResponseEntity<>(songs,HttpStatus.OK);
	}
	
	
//	@JsonView(ArtistFollowersView.class)
//	@RequestMapping(value="/api/FollowNotFollowArtist/{idArtist}", method=RequestMethod.PUT)
//	public ResponseEntity<Artist> favoriteNotFavoriteSong(@PathVariable long idArtist){
//		Artist a=artistService.findOne(idArtist);
//		if(a!=null){
//			long idUser=userComponent.getIdLoggedUser();
//			User u=userService.findOne(idUser);
//			List<User> followers=a.getFollowersOfArtist();
//			boolean finded=false;
//			for(int i=0;i<followers.size() && !finded;++i){
//				if(followers.get(i).getId_user()==idUser){
//					finded=true;
//				}
//			}
//			if(finded){
//				a.removeFollowerOfArtist(u);
//				artistService.save(a);
//				return new ResponseEntity<>(a , HttpStatus.OK);
//			}else{
//				a.addFollowerOfArtist(u);
//				artistService.save(a);
//				return new ResponseEntity<>(a , HttpStatus.OK);
//			}
//		}else
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//
//			
//		}
	
	@JsonView(ArtistView.class)
	@RequestMapping(value="/api/FollowArtist", method=RequestMethod.POST)
	public ResponseEntity<Artist> followArtist(@RequestParam long idArtist){
		Artist a=artistService.findOne(idArtist);
		if(a!=null){
			long idUser=userComponent.getIdLoggedUser();
			User u=userService.findOne(idUser);
			a.addFollowerOfArtist(u);
			artistService.save(a);
			return new ResponseEntity<>(a , HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

			
		}
	
	@JsonView(ArtistView.class)
	@RequestMapping(value="/api/NotFollowArtist", method=RequestMethod.DELETE)
	public ResponseEntity<Artist> notFollowArtist(@RequestParam long idArtist){
		Artist a=artistService.findOne(idArtist);
		if(a!=null){
			long idUser=userComponent.getIdLoggedUser();
			User u=userService.findOne(idUser);
			a.removeFollowerOfArtist(u);
			artistService.save(a);
			return new ResponseEntity<>(a , HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

			
		}
	
	

	
}
