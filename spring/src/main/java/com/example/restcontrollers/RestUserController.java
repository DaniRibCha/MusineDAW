package com.example.restcontrollers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
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
	
//	@RequestMapping(value="/api/ConfigUserData/{id}",method=RequestMethod.POST)
//	public ResponseEntity<User> setUserData(@PathVariable long id) throws Exception{
//		if(userComponent.getIdLoggedUser()==id){
//			User u=userService.findOne(id);
//			return new ResponseEntity<>(u,HttpStatus.OK);
//		}else{
//			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//		}
//	}

}
