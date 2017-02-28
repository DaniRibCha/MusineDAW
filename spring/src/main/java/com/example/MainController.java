package com.example;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
public class MainController {
	
	@Autowired
	private SongRepository songRepository;
	
	@Autowired
	private ArtistRepository artistRepository;
	
	
	@PostConstruct
	public void init(){
		Artist a1=new Artist("ChainSmokers","USA");
		Artist a2=new Artist("Halsey","USA");
		Artist a3=new Artist("Luis Fonsi","Puerto Rico");
		artistRepository.save(a1);
		artistRepository.save(a2);
		artistRepository.save(a3);
		
		List<Artist> artists1=new ArrayList<>();
		artists1.add(a1);
		
		Song s1=new Song("closer","https://www.youtube.com/watch?v=RvK8SKZbBWg");
		s1.setArtistsOfSong(artists1);
		s1.getArtistsOfSong().add(a2);
		
		List<Artist> artists2=new ArrayList<>();
		artists2.add(a3);
		
		Song s2=new Song("despacito","https://www.youtube.com/watch?v=kJQP7kiw5Fk");
		s2.setArtistsOfSong(artists2);
		
		songRepository.save(s1);
		songRepository.save(s2);
		
		//songRepository.saveAndFlush(new Song("closer","https://www.youtube.com/watch?v=RvK8SKZbBWg",));
		//songRepository.saveAndFlush(new Song("despacito","https://www.youtube.com/watch?v=RvK8SKZbBWg"));
		//songRepository.saveAndFlush(new Song("lost","https://www.youtube.com/watch?v=RvK8SKZbBWg"));
	}
	
	
//	@RequestMapping("/Playlist/{id}")
//	public String songsPlaylist(Model model, @PathVariable long id) {
//		
//		model.addAttribute("songs", songRepository.findOne(id));
//
//		return "songs_playlist";
//	}
//	
//	@RequestMapping("/Playlist/{id}")
//	public String songsPlaylist(Model model, @PathVariable long id) {
//		
//		model.addAttribute("songs", songRepository.findAll());
//		model.addAttribute("artists", artistRepository.findOne(id) );
//
//		return "Playlist";
//	}
	
	@RequestMapping("/Playlist")
	public String songsPlaylist(Model model) {
		
		model.addAttribute("songs", songRepository.findAll());
		
		return "Playlist";
	}
	
	
}
