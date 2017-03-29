package com.example.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.restcontrollers.RestArtistController.ArtistFollowersView;
import com.example.restcontrollers.RestArtistController.ArtistView;
import com.example.restcontrollers.RestPlaylistController.MyPlaylistsView;
import com.example.services.ArtistService;
import com.example.services.SongService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class RestSongController {
	@Autowired
	private SongService songService;
	
	private ArtistService artistService;
	
	interface SongView extends Song.Basic, Song.Artists,Song.Playlists{};
	
	@JsonView(SongView.class)
	@RequestMapping("/api/Song/{id}")
	public ResponseEntity<Song> getArtistSongs(@PathVariable long id) throws Exception{
		Song s=songService.findOne(id);
		return new ResponseEntity<>(s,HttpStatus.OK);
	}
	
interface SongsOfArtistView extends Artist.Songs, Song.Basic,Song.Artists,Song.Playlists{}
	
	@JsonView(SongsOfArtistView.class)
	@RequestMapping("/api/SongsOfArtist/{id}")
	public ResponseEntity<List<Song>> getSongsOfArist(@PathVariable long id) throws Exception{
		Artist a= artistService.findOne(id);
		List<Song> songs=a.getSongsOfArtist();
		return new ResponseEntity<>(songs,HttpStatus.OK);
	}
	
}
	

