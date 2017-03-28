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
    	List<Playlist> playlistsTop=playlistRepository.findByOrderByNLikesDesc();
		List<Playlist> topPlaylists=new ArrayList<>();
		for(int i=0;i<3;++i){
			topPlaylists.add(playlistsTop.get(i));
		}
		
		model.addAttribute("topPlaylists",topPlaylists);
		
		List<Artist> artistsTop=artistRepository.findByOrderByFollowersDesc();
		List<Artist> topArtists=new ArrayList<>();
		for(int i=0;i<3;++i){
			topArtists.add(artistsTop.get(i));
		}
		
		model.addAttribute("topArtists",topArtists);
		
		List<Tag> topTags=new ArrayList<>();
		
		topTags=tagRepository.findFirst3ByOrderByNumberTagDesc();
		
		model.addAttribute("topTags",topTags);
		
		if(!login){
			List<Playlist> playlists=playlistRepository.findByOrderByNLikesDesc();
			List<Playlist> wallPlaylists=new ArrayList<>();
			for(int i=0;i<10;++i){
				wallPlaylists.add(playlists.get(i));
			}
			model.addAttribute("wallPlaylists",wallPlaylists);
		}else{
			long idLogged=userComponent.getIdLoggedUser();
			User uLogged=userRepository.findOne(idLogged);
			Page<Playlist> wallPlaylists=playlistRepository.findFirst100ByOrderByDateAsc(page);

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
