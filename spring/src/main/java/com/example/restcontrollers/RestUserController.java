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
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.User;
import com.example.restcontrollers.RestPlaylistController.LikeUnlikePlaylistView;
import com.example.restcontrollers.RestPublicPageController.UserFollowView;
import com.example.security.UserComponent;
import com.example.services.ArtistService;
import com.example.services.SongService;
import com.example.services.UserService;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class RestUserController {
	
	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired 
	UserService userService;
	
	@Autowired 
	SongService songService;
	
	interface UserFollowView extends User.Basic{};
	
	@JsonView(UserFollowView.class)
	@RequestMapping(value="/api/ConfigUserData/{id}",method=RequestMethod.PUT)
	public ResponseEntity<User> setUserData(@PathVariable long id,
			@RequestParam(value = "biography", defaultValue = "") String biography,
			@RequestParam(value = "country", defaultValue = "") String country, 
			@RequestParam(value = "city", defaultValue = "") String city) throws Exception{
		if(userComponent.getIdLoggedUser()==id){
			User u=userService.findOne(id);
			if(!biography.equals("")) u.setBiography(biography);
			if(!country.equals("")) u.setCountry(country);
			if(!city.equals("")) u.setCity(city);
			userService.save(u);
			return new ResponseEntity<>(u,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
	}
	
//	@JsonView(UserFollowView.class)
//	@RequestMapping(value="/api/FollowNotFollowUser/{idUserToFollow}", method=RequestMethod.PUT)
//	public ResponseEntity<User> favoriteNotFavoriteSong(@PathVariable long idUserToFollow){
//		User uToFollow=userService.findOne(idUserToFollow);
//		if(uToFollow!=null){
//			long idUserLogged=userComponent.getIdLoggedUser();
//			User uLogged=userService.findOne(idUserLogged);
//			List<User> followingByLogged=uLogged.getFollowing();
//			boolean finded=false;
//			for(int i=0;i<followingByLogged.size() && !finded;++i){
//				if(followingByLogged.get(i).getId_user()==idUserToFollow){
//					finded=true;
//				}
//			}
//			if(finded){
//				uLogged.removeFollowing(uToFollow);
//				userService.save(uLogged);
//				return new ResponseEntity<>(uLogged , HttpStatus.OK);
//			}else{
//				uLogged.addFollowing(uToFollow);
//				userService.save(uLogged);
//				return new ResponseEntity<>(uLogged , HttpStatus.OK);
//			}
//		}else
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//
//			
//		}
	
	@JsonView(UserFollowView.class)
	@RequestMapping(value="/api/FollowNotFollowUser/{idUserToFollow}", method=RequestMethod.PUT)
	public ResponseEntity<String> favoriteNotFavoriteSong(@PathVariable long idUserToFollow) throws JsonProcessingException{
		User uToFollow=userService.findOne(idUserToFollow);
		if(uToFollow!=null){
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userService.findOne(idUserLogged);
			String uSerialized = new ObjectMapper().writeValueAsString(uLogged);
			List<User> followingByLogged=uLogged.getFollowing();
			boolean finded=false;
			for(int i=0;i<followingByLogged.size() && !finded;++i){
				if(followingByLogged.get(i).getId_user()==idUserToFollow){
					finded=true;
				}
			}
			if(finded){
				uLogged.removeFollowing(uToFollow);
				userService.save(uLogged);
				String following=new ObjectMapper().writeValueAsString(uLogged.getFollowing());
				return new ResponseEntity<>(following , HttpStatus.OK);
			}else{
				uLogged.addFollowing(uToFollow);
				userService.save(uLogged);
				String following=new ObjectMapper().writeValueAsString(uLogged.getFollowing());
				return new ResponseEntity<>(following , HttpStatus.OK);
			}
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

			
		}


}
