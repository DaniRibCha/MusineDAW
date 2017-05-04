package com.example.controllers;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.ArtistRepository;
import com.example.repositories.PlaylistRepository;
import com.example.repositories.TagRepository;
import com.example.repositories.UserRepository;
import com.example.security.UserComponent;
import com.example.services.ArtistService;
import com.example.services.PlaylistService;
import com.example.services.SongService;
import com.example.services.TagService;
import com.example.services.UserService;


@Controller
public class LoginIndexController {
	
	@Autowired
	private SongService songService;
	
	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private PlaylistService playlistService;
	
	@Autowired
	private TagService tagService;
	
	@Autowired
	private UserComponent userComponent;

    @RequestMapping("/login")
    public String login() {
    	return "login";
    }
    
    @RequestMapping("/loginerror")
    public String loginerror() {
    	return "loginerror";
    }
    
    @RequestMapping("/signIn")
    public String signIn(@RequestParam(value = "username") String username,
    		@RequestParam(value = "email") String email,
    		@RequestParam(value = "password") String password){
    	User u=new User(username,"",password,email,"ROLE_USER");
    	u.setBiography("");
		u.setCity("");
		u.setProfileImage("user.jpg");
    	userService.save(u);
    	return "login";
    }
    
    @RequestMapping("/")
	public String getIndex(Model model, Pageable page, HttpServletRequest request,
			@RequestParam(value = "likeId", required=false) Long likeId){	
    	boolean login=userComponent.isLoggedUser();
    	
    	if(login){
    		User uLogged=userService.findOne(userComponent.getIdLoggedUser());
    		if(uLogged.getName().equals("admin")){
    			model.addAttribute("admin",true);
    			return "index";
    		}
    	}
    	
//    	Principal principal = request.getUserPrincipal();
//    	User user = userRepository.findByName(principal.getName());
		List<Playlist> topPlaylists=playlistService.findTop3ByOrderByNLikesDesc();
		model.addAttribute("topPlaylists",topPlaylists);
		
		List<Artist> topArtists=artistService.findTop3ByOrderByFollowersDesc();
		model.addAttribute("topArtists",topArtists);
		
		List<Tag> topTags=tagService.findTop3ByOrderByNumberTagDesc();
		model.addAttribute("topTags",topTags);
		
		if(!login){
			List<Playlist> wallPlaylists=playlistService.findTop10ByOrderByNLikesDesc();
			model.addAttribute("wallPlaylists",wallPlaylists);
		}else{
			long idLogged=userComponent.getIdLoggedUser();
			User uLogged=userService.findOne(idLogged);
			Page<Playlist> wallPlaylists=playlistService.findFirst100ByOrderByDateAsc(page);
						
			int pageIndex = wallPlaylists.getNumber();
			List<Playlist> recentPlaylists=wallPlaylists.getContent();

			model.addAttribute("showPrev", !wallPlaylists.isFirst());
			model.addAttribute("showNext", !wallPlaylists.isLast());
			model.addAttribute("nextPage", pageIndex+1);
			model.addAttribute("prevPage", pageIndex-1);


			List<User> followingByLogged=uLogged.getFollowing();
			boolean finded;
			for(int i=0;i<recentPlaylists.size();++i){
				Playlist p=recentPlaylists.get(i);
				if(p.getCreatorId()==idLogged){
					p.setIdLogged(true);;
				}
				finded=false;
				for(int j=0;j<followingByLogged.size() && !finded;++j){
					if(followingByLogged.get(j).getId_user()==p.getCreatorId()){
						finded=true;
					}
				}
				p.setIdLogged(!finded);
			}
			
			model.addAttribute("wallPlaylists",wallPlaylists);
		}
		
		
		if(login){
			User uLogged=userService.findOne(userComponent.getIdLoggedUser());
			List<Artist> artistsFollowedByLogged=uLogged.getFollowingArtists();
			model.addAttribute("artistsFollowedByLogged",artistsFollowedByLogged);
		}
		
		if(login){
			User uLogged=userService.findOne(userComponent.getIdLoggedUser());
			model.addAttribute("uLogged",uLogged);
		}
		
		model.addAttribute("login", login);
		
		return "index";
	}	

}
