package com.example.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.classes.Artist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.repositories.ArtistRepository;
import com.example.repositories.PlaylistRepository;
import com.example.repositories.SongRepository;
import com.example.repositories.TagRepository;
import com.example.repositories.UserRepository;
import com.example.security.UserComponent;
import com.example.services.ArtistService;
import com.example.services.PlaylistService;
import com.example.services.SongService;
import com.example.services.TagService;
import com.example.services.UserService;

@Controller
public class AdminController {

	@Autowired
	private SongService songService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private TagService tagService;
	
	@Autowired
	private PlaylistService playlistService;
	
	@Autowired
	private UserComponent userComponent;
	
	//Paginas de admin

	@RequestMapping("/admin")
	public String adminPage(Model model){
		Artist aEmpty=artistService.findByName("");
		if(aEmpty!=null){
			artistService.delete(aEmpty);
		}
		List<Artist> artists=artistService.findAll();
		model.addAttribute("artists",artists);
		return "admin";
	}
	

	@RequestMapping("/adminCreateSong")
	public String adminCreateSong(Model model,
			@RequestParam(value = "idArtist") Long idArtist){

		Song s=new Song();
		Artist a=artistService.findOne(idArtist);
		s.addArtistsOfSong(a);
		songService.save(s);
		model.addAttribute("a",a);
		model.addAttribute("idSong",s.getId_song());

		return "adminCreateSong";
	}

	@RequestMapping("/adminCreateArtist")
	public String adminCreateArtist(Model model){

		Artist a=new Artist("","");
		artistService.save(a);

		model.addAttribute("idArtist",a.getId_artist());

		return "adminCreateArtist";
	}

	@RequestMapping("/adminEditArtist/{idArtist}")
	public String adminEditArtist(Model model,@PathVariable long idArtist,
			@RequestParam(value = "name", defaultValue = "") String name,
			@RequestParam(value = "country", defaultValue = "") String country,
			@RequestParam(value = "tagToRemove", defaultValue = "") String tagToRemove,
			@RequestParam(value = "tagToAdd", defaultValue = "") String tagToAdd){

		Artist a=artistService.findOne(idArtist);
		//si no estan vacios quiere decir que se llega desde un nuevo artista
		//o desde una modifica de un artista que ya estaba
		if(!name.equals("") && !country.equals("")){

			model.addAttribute("name",name);
			model.addAttribute("country",country);
			model.addAttribute("idArtist",idArtist);
			
			a.setName(name);a.setCountry(country);
			artistService.save(a);
			List<Song> songs=a.getSongsOfArtist();
			model.addAttribute("songs",songs);
		}else{//si no se esta editando un artista que ya estaba DESDE admin->primera modifica
			name=a.getName();
			country=a.getCountry();
			model.addAttribute("name",name);
			model.addAttribute("country",country);
			model.addAttribute("idArtist",idArtist);
			artistService.save(a);
			List<Song> songs=a.getSongsOfArtist();
			model.addAttribute("songs",songs);
		}
		
		if(!tagToRemove.equals("")){//si hay modifica del tag
			Tag t=tagService.findByName(tagToRemove);
			if(t==null){//si no hay ese tag no hace nada
			}else{
				a.removeTagOfArtist(t);
				artistService.save(a);
			}
		}
		
		if(!tagToAdd.equals("")){//si hay modifica del tag
			Tag t=tagService.findByName(tagToAdd);
			if(t==null){//si no hay ese tag lo crea
				t=new Tag(tagToAdd);
			}
			a.addTagOfArtist(t);
			artistService.save(a);
		}

		model.addAttribute("a",a);

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
		Song s=songService.findOne(idSong);
		s.setTitle(title);s.setLink_youtube(link_youtube);
		songService.save(s);
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