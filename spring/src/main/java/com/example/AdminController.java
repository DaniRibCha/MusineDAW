package com.example;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AdminController {
	
	private static final Object ArtistList = null;

	private static final Object SongList = null;

	@Autowired
	private SongRepository songRepository;
	
	@Autowired
	private ArtistRepository artistRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PlaylistRepository playlistRepository;
	
	@Autowired
	private TagRepository tagRepository;
	
	@Autowired
	private UserComponent userComponent;
	
	//Paginas de admin
	
			@RequestMapping("/admin")
			public String serachPlaylist(Model model, HttpSession session){
				return "admin";
			}
			
			@RequestMapping("/adminCreateSong")
			public String adminCreateSong(Model model, 
					@RequestParam(value = "name", defaultValue = "") String name,
					@RequestParam(value = "country", defaultValue = "")String link){
				model.addAttribute("SongRepository", songRepository);
				Song s=new Song(name,link);
				songRepository.save(s);
				
				return "adminCreateSong";
			}
			
			@RequestMapping("/adminCreateArtist")
			public String adminCreateArtist(Model model){
				
				//Artist a=new Artist(name,country);
				Artist a=new Artist();
				artistRepository.save(a);
				
				model.addAttribute("idArtist",a.getId_artist());
				
				return "adminCreateArtist";
			}
			
			@RequestMapping("/adminEditArtist")
			public String adminEditArtist(Model model,
					@RequestParam(value = "id") Long id_artist,
					@RequestParam(value = "name", defaultValue = "") String name,
					@RequestParam(value = "country", defaultValue = "") String country){
				
					System.out.println(id_artist);
					//Artist a=artistRepository.findOne(id_artist);
					//model.addAttribute("a",a);
				
				
				
				return "adminEditArtist";
			}
			
			@RequestMapping("/adminEditSong")
			public String adminEditSong(Model model, 
					@RequestParam(value = "name", defaultValue = "") String name,
					@RequestParam(value = "link", defaultValue = "") String link){
				
				model.addAttribute("SongList",SongList);
				
				List<Song> SongList=new ArrayList<>();
				
				SongList =songRepository.findAll();
				
				model.addAttribute("SongList",SongList);
				
				return "adminEditSong";
			}

		
	
}