package com.example;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AdminController {

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
			public String adminCreateSong(Model model, @PathVariable long id,
					@RequestParam(value = "name", defaultValue = "") String name,
					@RequestParam(value = "country", defaultValue = "")String link){
				model.addAttribute("SongRepository",songRepository);
				
				Song s=new Song(name,link);
				
				s= songRepository.findOne(id);
				
				songRepository.save(s);
				
				model.addAttribute("s",s);
				
				return "adminCreateSong";
				
			}
			
			@RequestMapping("/adminCreateArtist")
			public String adminCreateArtist(Model model, @PathVariable long id_artist,
					@RequestParam(value = "name", defaultValue = "") String name,
					@RequestParam(value = "country", defaultValue = "") String country){
				
				model.addAttribute("ArtistRepository",artistRepository);
				
				Artist a=new Artist (name,country);
				
				a= artistRepository.findOne(id_artist);
				
				artistRepository.save(a);
				
				model.addAttribute("a",a);
				
				
				return "adminCreateArtist";
			}
			
			@RequestMapping("/adminEditArtist")
			public String adminEditArtist(Model model,
					@RequestParam(value = "id") long id_artist,
					@RequestParam(value = "name", defaultValue = "") String name,
					@RequestParam(value = "country", defaultValue = "") String country){
				
				model.addAttribute("ArtistRepository",artistRepository);
				
				Artist a=new Artist (name,country);
				
				a= artistRepository.findOne(id_artist);
				
				artistRepository.save(a);
				
				model.addAttribute("a",a);
				
				
				return "adminEditArtist";
			}
			
			@RequestMapping("/adminEditSong")
			public String adminEditSong(Model model, 
					@RequestParam (value = "id") long id,
					@RequestParam(value = "name", defaultValue = "") String name,
					@RequestParam(value = "link", defaultValue = "") String link){
				
				model.addAttribute("SongRepository",songRepository);
				
				Song s=new Song(name,link);
				
				s= songRepository.findOne(id);
				
				songRepository.save(s);
				
				model.addAttribute("s",s);
				
				return "adminEditSong";
			}

		
	
}