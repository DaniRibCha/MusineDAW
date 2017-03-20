package com.example;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class WebController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired
	private PlaylistRepository playlistRepository;
	
	@Autowired
	private ArtistRepository artistRepository;
	
	@Autowired
	private TagRepository tagRepository;

    @RequestMapping("/login")
    public String login() {
    	return "login";
    }
    
    @RequestMapping("/loginerror")
    public String loginerror() {
    	return "loginerror";
    }
    
    @RequestMapping("signIn")
    public String signIn(Model model,
    		@RequestParam(value = "username") String username,
    		@RequestParam(value = "email") String email,
    		@RequestParam(value = "password") String password){
    	
    	User u=new User(username, "",password,email,"ROLE_USER");
    	userRepository.save(u);
    	userComponent.setLoggedUser(u);
    	boolean login=userComponent.isLoggedUser();
    	
    	
    	
//    	Principal principal = request.getUserPrincipal();
//    	User user = userRepository.findByName(principal.getName());
    	
    	//User u=userComponent.getLoggedUser();
    	
    	
		List<Playlist> topPlaylists=new ArrayList<>();
		
		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
		
		model.addAttribute("topPlaylists",topPlaylists);
		
		List<Artist> topArtists=new ArrayList<>();
		
		topArtists=artistRepository.findFirst3ByOrderByFollowersDesc();
		
		model.addAttribute("topArtists",topArtists);
		
		List<Tag> topTags=new ArrayList<>();
		
		topTags=tagRepository.findFirst3ByOrderByNumberTagDesc();
		
		model.addAttribute("topTags",topTags);
		
		List<Playlist> wallPlaylists=new ArrayList<>();
//		
		if(!login){
			wallPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
		}else{
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			List<Playlist> recentPlaylists=playlistRepository.findFirst100ByOrderByDateAsc();
			List<User> followingByLogged=uLogged.getFollowing();
			boolean betweenFollowed;
			for(int i=0;i<recentPlaylists.size();++i){
				Playlist p=recentPlaylists.get(i);
				betweenFollowed=false;
				for(int j=0;j<followingByLogged.size() && !betweenFollowed;++j){
					if(p.getCreatorId()==followingByLogged.get(j).getId_user()){
						betweenFollowed=true;
					}
				}
				if(!betweenFollowed) recentPlaylists.remove(p);
			}
			wallPlaylists=recentPlaylists;
		}
		
		//cheque el atributo booelan idLogged
		//para trazar la ruta dinamica de cada playlist desde la plantilla
		if(login){
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			long idLogged=uLogged.getId_user();
			
			for(int i=0;i<wallPlaylists.size();++i){
				Playlist p=wallPlaylists.get(i);
				if(p.getCreatorId()==idLogged){
					p.setIdLogged(true);
				}
			}
		}
		
		model.addAttribute("wallPlaylists",wallPlaylists);
		
		if(login){
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			List<Artist> artistsFollowedByLogged=uLogged.getFollowingArtists();
			model.addAttribute("artistsFollowedByLogged",artistsFollowedByLogged);
		}
		
		if(login){
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			model.addAttribute("uLogged",uLogged);
		}
		
		model.addAttribute("login", login);
		
		return "index";
    }
    

    
    @RequestMapping("/")
	public String getIndex(HttpSession session, Model model, HttpServletRequest request,
			@RequestParam(value = "likeId", required=false) Long likeId){
    	
    	
    	boolean login=userComponent.isLoggedUser();
    	
    	if(login){
    		User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
    		if(uLogged.getName().equals("admin")){
    			model.addAttribute("admin",true);
    			return "index";
    		}
    	}
    	
//    	Principal principal = request.getUserPrincipal();
//    	User user = userRepository.findByName(principal.getName());
    	
    	//User u=userComponent.getLoggedUser();
    	
    	
		List<Playlist> topPlaylists=new ArrayList<>();
		
		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
		
		model.addAttribute("topPlaylists",topPlaylists);
		
		List<Artist> topArtists=new ArrayList<>();
		
		topArtists=artistRepository.findFirst3ByOrderByFollowersDesc();
		
		model.addAttribute("topArtists",topArtists);
		
		List<Tag> topTags=new ArrayList<>();
		
		topTags=tagRepository.findFirst3ByOrderByNumberTagDesc();
		
		model.addAttribute("topTags",topTags);
		
		List<Playlist> wallPlaylists=new ArrayList<>();
//		
		if(!login){
			wallPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
		}else{
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			List<Playlist> recentPlaylists=playlistRepository.findFirst100ByOrderByDateAsc();
			List<User> followingByLogged=uLogged.getFollowing();
			boolean betweenFollowed;
			for(int i=0;i<recentPlaylists.size();++i){
				Playlist p=recentPlaylists.get(i);
				betweenFollowed=false;
				for(int j=0;j<followingByLogged.size() && !betweenFollowed;++j){
					if(p.getCreatorId()==followingByLogged.get(j).getId_user()){
						betweenFollowed=true;
					}
				}
				if(!betweenFollowed) recentPlaylists.remove(p);
			}
			wallPlaylists=recentPlaylists;
		}
		
		//cheque el atributo booelan idLogged
		//para trazar la ruta dinamica de cada playlist desde la plantilla
		if(login){
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			long idLogged=uLogged.getId_user();
			
			for(int i=0;i<wallPlaylists.size();++i){
				Playlist p=wallPlaylists.get(i);
				if(p.getCreatorId()==idLogged){
					p.setIdLogged(true);
				}
			}
		}
		
		model.addAttribute("wallPlaylists",wallPlaylists);
		
		if(login){
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			List<Artist> artistsFollowedByLogged=uLogged.getFollowingArtists();
			model.addAttribute("artistsFollowedByLogged",artistsFollowedByLogged);
		}
		
		if(login){
			User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			model.addAttribute("uLogged",uLogged);
		}
		
		model.addAttribute("login", login);
		
		return "index";
	}
	
    
//    @RequestMapping("/admin")
//    public String admin() {
//    	return "admin";
//    }
}
