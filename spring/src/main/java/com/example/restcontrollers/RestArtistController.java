package com.example.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Artist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.ArtistRepository;
import com.example.services.ArtistService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class RestArtistController {

	@Autowired
	private ArtistService artistService;
	
	
	
	interface ArtistView extends Artist.Basic, Artist.Songs,Artist.Tags, Song.Basic,Tag.Basic{};
	
	@JsonView(ArtistView.class)
	@RequestMapping("/api/Artist/{id}")
	public ResponseEntity<Artist> getArtistSongs(@PathVariable long id) throws Exception{
		Artist a=artistService.findOne(id);
		return new ResponseEntity<>(a,HttpStatus.OK);
	}
	

	interface ArtistFollowersView extends Artist.Basic,Artist.ArtistFollowers,User.Basic{};
	
	@JsonView(ArtistFollowersView.class)
	@RequestMapping("/api/ArtistFollowers/{id}")
	public ResponseEntity<Artist> getArtistFollowers(@PathVariable long id) throws Exception{
		Artist a=artistService.findOne(id);
		return new ResponseEntity<>(a,HttpStatus.OK);
	}
	
interface ArtistSongsView extends Artist.Songs, Song.Basic,Song.Artists,Song.Playlists{}
	
	@JsonView(ArtistSongsView.class)
	@RequestMapping("/api/SongsOfArtist/{id}")
	public ResponseEntity<List<Song>> getSongsOfArist(@PathVariable long id) throws Exception{
		Artist a= artistService.findOne(id);
		List<Song> songs=a.getSongsOfArtist();
		return new ResponseEntity<>(songs,HttpStatus.OK);
	}
	
}
