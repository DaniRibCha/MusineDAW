package com.example.restcontrollers;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.User;
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
	
	
	@RequestMapping(value="/api/User/{id}",method=RequestMethod.GET)
	public ResponseEntity<User> getUser(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		if(u!=null){
			return new ResponseEntity<>(u,HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	@RequestMapping(value="/api/NewUser",method=RequestMethod.POST)
	public ResponseEntity<User> newUser(@RequestBody User u) throws Exception{
		u.setBiography("");
		u.setCity("");
		u.setProfileImage("user.jpg");
		userService.save(u);
		return new ResponseEntity<>(u,HttpStatus.OK);
	}
	
	
	
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

	
//	@RequestMapping(value="/api/FollowNotFollowUser/{idUserToFollow}", method=RequestMethod.PUT)
//	public ResponseEntity<List<User>> favoriteNotFavoriteSong(@PathVariable long idUserToFollow) throws JsonProcessingException{
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
//			}else{
//				uLogged.addFollowing(uToFollow);
//			}
//			userService.save(uLogged);
//			List<User> following=uLogged.getFollowing();
//			return new ResponseEntity<>(following , HttpStatus.OK);
//			
//		}else
//			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//
//			
//		}
	
	@RequestMapping(value="/api/FollowUser/{idUserToFollow}", method=RequestMethod.POST)
	public ResponseEntity<User> followUser(@PathVariable long idUserToFollow) throws JsonProcessingException{
		User uToFollow=userService.findOne(idUserToFollow);
		if(uToFollow!=null){
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userService.findOne(idUserLogged);
			uLogged.addFollowing(uToFollow);
			userService.save(uLogged);
			return new ResponseEntity<>(uLogged , HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

			
		}
	
	@RequestMapping(value="/api/NotFollowUser/{idUserToFollow}", method=RequestMethod.DELETE)
	public ResponseEntity<User> notFollowUser(@PathVariable long idUserToFollow) throws JsonProcessingException{
		User uToFollow=userService.findOne(idUserToFollow);
		if(uToFollow!=null){
			long idUserLogged=userComponent.getIdLoggedUser();
			User uLogged=userService.findOne(idUserLogged);
			uLogged.removeFollowing(uToFollow);
			userService.save(uLogged);
			return new ResponseEntity<>(uLogged , HttpStatus.OK);
		}else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);

			
		}
	
	
	
	private static final String USER_IMAGE_FOLDER = "src/main/resources/static/imgProfile/";
	
	@RequestMapping(value = "/api/image/upload/{idUser}", method = RequestMethod.POST)
	public ResponseEntity<User> handleFileUpload(
			@RequestBody MultipartFile file,
			@PathVariable long idUser) {

		String fileName = file.getOriginalFilename();
		long idLogged=userComponent.getIdLoggedUser();
		if(idLogged==idUser){
			User u=userService.findOne(idLogged);
			//String fileName =idLogged  + ".jpg";
			if (!file.isEmpty()) {
				try {
					File filesFolder = new File(USER_IMAGE_FOLDER);
					if (!filesFolder.exists()) {
						filesFolder.mkdirs();
					}
					
					File uploadedFile = new File(filesFolder.getAbsolutePath(), fileName);
					file.transferTo(uploadedFile);

					u.setProfileImage(fileName);
					userService.save(u);

					return new ResponseEntity<>(u, HttpStatus.OK);


				} catch (Exception e) {
					return new ResponseEntity<>(u, HttpStatus.NOT_FOUND);
				}
			} else {
				return new ResponseEntity<>(u, HttpStatus.NOT_FOUND);

			}
		}else{
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
			
	}
	
	@RequestMapping("/api/image/{fileName}")
	public void handleFileDownload(@PathVariable String fileName,
			HttpServletResponse res) throws FileNotFoundException, IOException {

		File file = new File(USER_IMAGE_FOLDER, fileName + ".jpg");
		//File file = new File(FILES_FOLDER, fileName);

		if (file.exists()) {
			res.setContentType("image/jpeg");
			res.setContentLength(new Long(file.length()).intValue());
			FileCopyUtils
					.copy(new FileInputStream(file), res.getOutputStream());
		} else {
			res.sendError(404, "File" + fileName + "(" + file.getAbsolutePath()
					+ ") does not exist");
		}
	}


}
