package com.example.restcontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Song;
import com.example.classes.User;
import com.example.security.UserComponent;
import com.example.services.ArtistService;
import com.example.services.UserService;

@RestController
public class RestUserController {
	
	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired 
	UserService userService;
	
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

}
