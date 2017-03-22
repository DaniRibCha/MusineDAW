package com.example;

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
    
    @RequestMapping("/")
	public String getIndex(Model model, Pageable page, HttpServletRequest request,
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
    	
		List<Playlist> topPlaylists=new ArrayList<>();
		
		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
		
		model.addAttribute("topPlaylists",topPlaylists);
		
		List<Artist> topArtists=new ArrayList<>();
		
		topArtists=artistRepository.findFirst3ByOrderByFollowersDesc();
		
		model.addAttribute("topArtists",topArtists);
		
		List<Tag> topTags=new ArrayList<>();
		
		topTags=tagRepository.findFirst3ByOrderByNumberTagDesc();
		
		model.addAttribute("topTags",topTags);
		
		if(!login){
			List<Playlist> wallPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
			model.addAttribute("wallPlaylists",wallPlaylists);
		}else{
			//User uLogged=userRepository.findOne(userComponent.getIdLoggedUser());
			//List<Playlist> recentPlaylists=playlistRepository.findFirst100ByOrderByDateAsc();
			Page<Playlist> wallPlaylists=playlistRepository.findFirst100ByOrderByDateAsc(page);

			int pageIndex = wallPlaylists.getNumber();

			model.addAttribute("showPrev", !wallPlaylists.isFirst());
			model.addAttribute("showNext", !wallPlaylists.isLast());
			model.addAttribute("nextPage", pageIndex+1);
			model.addAttribute("prevPage", pageIndex-1);

			model.addAttribute("wallPlaylists",wallPlaylists);


			//List<User> followingByLogged=uLogged.getFollowing();
			//			boolean betweenFollowed;
			//			for(int i=0;i<recentPlaylists.size();++i){
			//				Playlist p=recentPlaylists.get(i);
			//				betweenFollowed=false;
			//				for(int j=0;j<followingByLogged.size() && !betweenFollowed;++j){
			//					if(p.getCreatorId()==followingByLogged.get(j).getId_user()){
			//						betweenFollowed=true;
			//					}
			//				}
			//				if(!betweenFollowed) recentPlaylists.remove(p);
			//			}
			//			wallPlaylists=recentPlaylists;
		}
		
		
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

}
