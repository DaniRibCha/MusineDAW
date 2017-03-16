//package com.example;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.servlet.http.HttpSession;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.data.domain.PageRequest;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//
//@Controller
//public class UserController {
//	
//	@Autowired
//	private UserRepository userRepository;
//	
//	@Autowired
//	private PlaylistRepository playlistRepository;
//	
//	@Autowired
//	private ArtistRepository artistRepository;
//	
//	@Autowired
//	private TagRepository tagRepository;
//	
//	@Autowired
//	private UserComponent userComponent;
//	
//	
//	@RequestMapping("/login")
//	public String getLogin(){
//		return "login";
//	}
//	
//	@RequestMapping("loginDone")
//	public String getLoginIndex(HttpSession session, Model model,
//			@RequestParam(value = "userName", defaultValue = "") String userName,
//			@RequestParam(value = "email", defaultValue = "") String email, 
//			@RequestParam(value = "password", defaultValue = "") String password,
//			@RequestParam(value = "likeId", required=false) Long likeId){
//		
//		boolean login=false;
//		
//		User u;
//		//mail vacia->form del login
//		if(email.equals("")){
//			u=userRepository.findByName(userName);
//			if(u==null){ //nombre no correcto
//				session.invalidate();
//				return "login";
//			}
//			String psw=u.getPasswordHash();
//			if(password.equals(psw)){
//				login=true;
//				
//				userRepository.save(u);
//				//session.setMaxInactiveInterval(30);
//				session.setAttribute("idUser", u.getId_user());
//			}else{//nombre correcto y password no correcta
//				session.invalidate();
//				return "login";
//			}
//		}
//		else{
//			u=new User(userName,"",password,email);
//			u.addRole("USER");
//			userRepository.save(u);
//			login=true;
//			session.setAttribute("idUser", u.getId_user());
//		}
//		
//		model.addAttribute("idUser",session.getAttribute("idUser"));
//		
//		model.addAttribute("login",login);
//		
//		List<Playlist> topPlaylists=new ArrayList<>();
//		
//		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
//		
//		model.addAttribute("topPlaylists",topPlaylists);
//		
//		List<Artist> topArtists=new ArrayList<>();
//		
//		topArtists=artistRepository.findFirst3ByOrderByFollowersDesc();
//		
//		model.addAttribute("topArtists",topArtists);
//		
//		List<Tag> topTags=new ArrayList<>();
//		
//		topTags=tagRepository.findFirst3ByOrderByNumberTagDesc();
//		
//		model.addAttribute("topTags",topTags);
//
//		List<Playlist> wallPlaylists=new ArrayList<>();
//		
//		if(!login){
//			wallPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
//		}else{
//			long idLogged=((Long)(session.getAttribute("idUser")));
//			User uLogged=userRepository.findOne(idLogged);
//			List<Playlist> recentPlaylists=playlistRepository.findFirst100ByOrderByDateAsc();
//			List<User> followingByLogged=uLogged.getFollowing();
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
//		}
//		
//		//no hace falta porque en el muro del usuario logueado no aparecen sus playlists
////		//cheque el atributo booelan idLogged
////		//para trazar la ruta dinamica de cada playlist desde la plantilla
////		if(login){
////			long idLogged=((Long)(session.getAttribute("idUser")));
////			
////			for(int i=0;i<wallPlaylists.size();++i){
////				Playlist p=wallPlaylists.get(i);
////				if(p.getCreatorId()==idLogged){
////					p.setIdLogged(true);
////				}
////			}
////		}
//		
//		model.addAttribute("wallPlaylists",wallPlaylists);
//		
//		if(login){
//			long idLogged=((Long)(session.getAttribute("idUser")));
//			User uLogged=userRepository.findOne(idLogged);
//			List<Artist> artistsFollowedByLogged=uLogged.getFollowingArtists();
//			model.addAttribute("artistsFollowedByLogged",artistsFollowedByLogged);
//		}
//		
//		return "index";
//	}
//	
//	
//	@RequestMapping("/Logout")
//	public String getIndexLogOut(HttpSession session, Model model){
//		
//		boolean login=false;
//		
//		session.invalidate();
//		
//		model.addAttribute("login",login);
//		
//		List<Playlist> topPlaylists=new ArrayList<>();
//		
//		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
//		
//		model.addAttribute("topPlaylists",topPlaylists);
//		
//		List<Artist> topArtists=new ArrayList<>();
//		
//		topArtists=artistRepository.findFirst3ByOrderByFollowersDesc();
//		
//		model.addAttribute("topArtists",topArtists);
//		
//		List<Tag> topTags=new ArrayList<>();
//		
//		topTags=tagRepository.findFirst3ByOrderByNumberTagDesc();
//		
//		model.addAttribute("topTags",topTags);
//		
//		List<Playlist> wallPlaylists=new ArrayList<>();
//		
//		wallPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
//		
//		model.addAttribute("wallPlaylists",wallPlaylists);
//		
//		return "index";
//	}
////	
////	@RequestMapping("/")
////	public String getIndex(HttpSession session, Model model,
////			@RequestParam(value = "likeId", required=false) Long likeId){
////		
////		boolean login=false;
////		//si la sesion noes nueva y tiene el id de usuario logeado
////		//añadida del id del usuario logeado al modelo
////		if(!session.isNew() && session.getAttribute("idUser")!=null){
////			login=true;
////			model.addAttribute("idUser",session.getAttribute("idUser"));
////		}
////		
////		
////		model.addAttribute("login",login);
////		
////		List<Playlist> topPlaylists=new ArrayList<>();
////		
////		topPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
////		
////		model.addAttribute("topPlaylists",topPlaylists);
////		
////		List<Artist> topArtists=new ArrayList<>();
////		
////		topArtists=artistRepository.findFirst3ByOrderByFollowersDesc();
////		
////		model.addAttribute("topArtists",topArtists);
////		
////		List<Tag> topTags=new ArrayList<>();
////		
////		topTags=tagRepository.findFirst3ByOrderByNumberTagDesc();
////		
////		model.addAttribute("topTags",topTags);
////		
////		List<Playlist> wallPlaylists=new ArrayList<>();
////		
////		if(!login){
////			wallPlaylists=playlistRepository.findFirst3ByOrderByNLikesDesc();
////		}else{
////			long idLogged=((Long)(session.getAttribute("idUser")));
////			User uLogged=userRepository.findOne(idLogged);
////			List<Playlist> recentPlaylists=playlistRepository.findFirst100ByOrderByDateAsc();
////			List<User> followingByLogged=uLogged.getFollowing();
////			boolean betweenFollowed;
////			for(int i=0;i<recentPlaylists.size();++i){
////				Playlist p=recentPlaylists.get(i);
////				betweenFollowed=false;
////				for(int j=0;j<followingByLogged.size() && !betweenFollowed;++j){
////					if(p.getCreatorId()==followingByLogged.get(j).getId_user()){
////						betweenFollowed=true;
////					}
////				}
////				if(!betweenFollowed) recentPlaylists.remove(p);
////			}
////			wallPlaylists=recentPlaylists;
////		}
////		
////		//cheque el atributo booelan idLogged
////		//para trazar la ruta dinamica de cada playlist desde la plantilla
////		if(login){
////			long idLogged=((Long)(session.getAttribute("idUser")));
////			
////			for(int i=0;i<wallPlaylists.size();++i){
////				Playlist p=wallPlaylists.get(i);
////				if(p.getCreatorId()==idLogged){
////					p.setIdLogged(true);
////				}
////			}
////		}
////		
////		model.addAttribute("wallPlaylists",wallPlaylists);
////		
////		if(login){
////			long idLogged=((Long)(session.getAttribute("idUser")));
////			User uLogged=userRepository.findOne(idLogged);
////			List<Artist> artistsFollowedByLogged=uLogged.getFollowingArtists();
////			model.addAttribute("artistsFollowedByLogged",artistsFollowedByLogged);
////		}
////		
////		
////		return "index";
////	}
//	
//
//}
