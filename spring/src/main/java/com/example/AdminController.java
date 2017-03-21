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
	public String adminPage(Model model){
		List<Artist> artists=artistRepository.findAll();
		model.addAttribute("artists",artists);
		return "admin";
	}

	@RequestMapping("/adminCreateSong")
	public String adminCreateSong(Model model,
			@RequestParam(value = "idArtist") Long idArtist){

		Song s=new Song();
		Artist a=artistRepository.findOne(idArtist);
		s.addArtistsOfSong(a);
		songRepository.save(s);
		model.addAttribute("a",a);
		model.addAttribute("idSong",s.getId_song());

		return "adminCreateSong";
	}

	@RequestMapping("/adminCreateArtist")
	public String adminCreateArtist(Model model){

		Artist a=new Artist();
		artistRepository.save(a);

		model.addAttribute("idArtist",a.getId_artist());

		return "adminCreateArtist";
	}

	@RequestMapping("/adminEditArtist/{idArtist}")
	public String adminEditArtist(Model model,@PathVariable long idArtist,
			@RequestParam(value = "name", defaultValue = "") String name,
			@RequestParam(value = "country", defaultValue = "") String country){

		//si no estan vacios quiere decir que se llega desde un nuevo artista
		//o desde una modifica de un artista que ya estaba
		if(!name.equals("") && !country.equals("")){

			model.addAttribute("name",name);
			model.addAttribute("country",country);
			model.addAttribute("idArtist",idArtist);
			Artist a=artistRepository.findOne(idArtist);
			a.setName(name);a.setCountry(country);
			artistRepository.save(a);
			model.addAttribute("a",a);
			List<Song> songs=a.getSongsOfArtist();
			model.addAttribute("songs",songs);
		}else{//si no se esta editando un artista que ya estaba DESDE admin->primera modifica
			Artist a=artistRepository.findOne(idArtist);
			name=a.getName();
			country=a.getCountry();
			model.addAttribute("name",name);
			model.addAttribute("country",country);
			model.addAttribute("idArtist",idArtist);
			artistRepository.save(a);
			model.addAttribute("a",a);
			List<Song> songs=a.getSongsOfArtist();
			model.addAttribute("songs",songs);
		}



		return "adminEditArtist";
	}

	@RequestMapping("/adminEditSong/{idSong}")
	public String adminEditSong(Model model, @PathVariable long idSong,
			@RequestParam(value = "idArtist") Long idArtist,
			@RequestParam(value = "title", defaultValue = "") String title,
			@RequestParam(value = "link_youtube", defaultValue = "") String link_youtube){


		model.addAttribute("title", title);
		model.addAttribute("link_youtube",link_youtube);
		model.addAttribute("idSong",idSong);
		Song s=songRepository.findOne(idSong);
		s.setTitle(title);s.setLink_youtube(link_youtube);
		songRepository.save(s);
		model.addAttribute("s",s);

		//				model.addAttribute("SongList",SongList);
		//				
		//				List<Song> SongList=new ArrayList<>();
		//				
		//				SongList =songRepository.findAll();
		//				
		//				model.addAttribute("SongList",SongList);

		return "adminEditSong";
	}

		
	
}