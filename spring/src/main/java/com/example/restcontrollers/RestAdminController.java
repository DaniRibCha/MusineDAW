package com.example.restcontrollers;

import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.restcontrollers.RestPlaylistController.CreatePlaylistView;
import com.example.restcontrollers.RestSongController.SongView;
import com.example.security.UserComponent;
import com.example.services.ArtistService;
import com.example.services.SongService;
import com.example.services.TagService;
import com.example.services.UserService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class RestAdminController {
	
	@Autowired
	private ArtistService artistService;
	
	@Autowired
	private TagService tagService;
	
	@Autowired
	private SongService songService;
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired 
	UserService userService;
	
	interface ArtistView extends Artist.Basic, Artist.Songs,Artist.Tags, Song.Basic,Tag.Basic{};
	
	@JsonView(ArtistView.class)
	@RequestMapping(value="/api/AdminEditArtist/{name}", method=RequestMethod.PUT)
	public ResponseEntity<Artist> editArtist(@PathVariable String name,
			@RequestParam(value = "country", defaultValue = "") String country,
			@RequestParam(value = "newName", defaultValue = "") String newName,
			@RequestParam(value = "tagToRemove", defaultValue = "") String tagToRemove,
			@RequestParam(value = "tagToAdd", defaultValue = "") String tagToAdd) throws Exception{
		Artist a=artistService.findByName(name);
		if(a!=null){
			if(!country.equals("")) a.setCountry(country);
			if(!newName.equals("")) a.setName(newName);
			artistService.save(a);
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
			return new ResponseEntity<>(a,HttpStatus.OK);
		}
		else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
	
	
	@JsonView(ArtistView.class)
	@RequestMapping(value="/api/AdminCreateArtist", method=RequestMethod.POST)
	public ResponseEntity<Artist> createArtist(@RequestBody Artist a) throws Exception{
		artistService.save(a);
		return new ResponseEntity<>(a,HttpStatus.CREATED);
	}
	

	interface SongView extends Song.Basic, Song.Artists,Artist.Basic{};
	
	@JsonView(SongView.class)
	@RequestMapping(value="/api/AdminCreateSongOfArtist/{idArtist}", method=RequestMethod.POST)
	public ResponseEntity<Song> createSong(@PathVariable long idArtist,
			@RequestBody Song s) throws Exception{
		s.addArtistsOfSong(artistService.findOne(idArtist));
		songService.save(s);
		return new ResponseEntity<>(s,HttpStatus.CREATED);
	}
	
	@JsonView(SongView.class)
	@RequestMapping(value="/api/AdminAddArtistInSong/{idSong}", method=RequestMethod.PUT)
	public ResponseEntity<Song> addArtistInSong(@PathVariable long idSong,
			@RequestParam(value = "nameArtist") String nameArtist) throws Exception{
		Song s=songService.findOne(idSong);
		if(s!=null){
			s.addArtistsOfSong(artistService.findByName(nameArtist));
			songService.save(s);
			return new ResponseEntity<>(s,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(SongView.class)
	@RequestMapping(value="/api/AdminRemoveArtistBySong/{idSong}", method=RequestMethod.PUT)
	public ResponseEntity<Song> removeArtistInSong(@PathVariable long idSong,
			@RequestParam(value = "nameArtist") String nameArtist) throws Exception{
		Song s=songService.findOne(idSong);
		if(s!=null){
			s.removeArtistsOfSong(artistService.findByName(nameArtist));
			songService.save(s);
			return new ResponseEntity<>(s,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@JsonView(SongView.class)
	@RequestMapping(value="/api/AdminEditSong/{idSong}", method=RequestMethod.PUT)
	public ResponseEntity<Song> adminEditSong(@PathVariable long idSong,
			@RequestParam(value = "title", defaultValue = "") String title,
			@RequestParam(value = "link_youtube", defaultValue = "") String link_youtube){
		
		Song s=songService.findOne(idSong);
		if(s!=null){
			if(!title.equals("")) s.setTitle(title);
			if(!link_youtube.equals("")) s.setLink_youtube(link_youtube);
			songService.save(s);
			return new ResponseEntity<>(s,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	
	
	
}
