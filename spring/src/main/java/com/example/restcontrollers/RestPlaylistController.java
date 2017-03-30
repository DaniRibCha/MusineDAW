package com.example.restcontrollers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.PlaylistRepository;
import com.example.security.UserComponent;
import com.example.services.PlaylistService;
import com.example.services.UserService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class RestPlaylistController {
	
	private static final Logger log = LoggerFactory.getLogger(RestPlaylistController.class);
	
	@Autowired
	private UserComponent userComponent;
	
	@Autowired 
	private PlaylistService playlistService;
	
	@Autowired 
	private UserService userService;
	
	interface PlaylistView extends Playlist.Basic, Playlist.Songs,Playlist.Tags, Song.Basic,Tag.Basic{}
	
	@JsonView(PlaylistView.class)
	@RequestMapping("/api/Playlist/{id}")
	public ResponseEntity<Playlist> getPlaylist(@PathVariable long id) throws Exception{
		Playlist p=playlistService.findOne(id);
		return new ResponseEntity<>(p,HttpStatus.OK);
	}
	
	interface MyPlaylistsView extends Playlist.Basic, Playlist.Songs,Playlist.Tags, Song.Basic{}
	
	@JsonView(MyPlaylistsView.class)
	@RequestMapping("/api/MyPlaylists/{id}")
	public ResponseEntity<List<Playlist>> getPlaylists(@PathVariable long id) throws Exception{
		//User uLogged=userComponent.getLoggedUser();
		if(userComponent.getIdLoggedUser()==id){
			List<Playlist> playlists=playlistService.findByCreatorIdList(id);
			return new ResponseEntity<>(playlists,HttpStatus.OK);
	} else {
		return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
	}
	}
	
	
	interface PlaylistTagsView extends Playlist.Basic, Playlist.Tags, Tag.Basic{};
	
	@JsonView(PlaylistTagsView.class)
	@RequestMapping("/PlaylistTags/{id}")
	public ResponseEntity<List<Tag>> getPlaylistTags(@PathVariable long id) throws Exception{
		Playlist p=playlistService.findOne(id);
		List<Tag> tags=p.getTagsOfPlaylist();
		return new ResponseEntity<>(tags,HttpStatus.OK);
	}

}
