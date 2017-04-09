package com.example.restcontrollers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.User;
import com.example.services.ArtistService;
import com.example.services.PlaylistService;
import com.example.services.TagService;
import com.example.services.UserService;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;

@RestController
public class RestPublicPageController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	PlaylistService playlistService;
	
	@Autowired
	TagService tagService;
	
	@Autowired
	ArtistService artistService;
	

	
	@RequestMapping("/api/UserFollowers/{id}")
	public ResponseEntity<User> getUserFollow(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		if(u!=null){
			return new ResponseEntity<>(u,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(u,HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	interface SearchParamTagView extends Playlist.Basic,Playlist.Tags,Tag.Basic{};
	@JsonView(SearchParamTagView.class)
	@RequestMapping("/api/Playlist/SearchByTag")
	public ResponseEntity<List<Playlist>> getSearchByParamTag(
			@RequestParam(value = "key") String key) throws Exception{
		Tag t=tagService.findByName(key);
		List<Tag> tags=new ArrayList<>();
		tags.add(t);
		List<Playlist> playlists=playlistService.findByTagsOfPlaylist(tags);
		return new ResponseEntity<>(playlists,HttpStatus.OK);
	}
	
	interface SearchParamTitleView extends Playlist.Basic,Playlist.Tags,Tag.Basic{};
	@JsonView(SearchParamTitleView.class)
	@RequestMapping("/api/Playlist/SearchByTitle")
	public ResponseEntity<List<Playlist>> getSearchByParamTitle(
			@RequestParam(value = "key") String key) throws Exception{
		List<Playlist> playlists=playlistService.findByTitle(key);
		return new ResponseEntity<>(playlists,HttpStatus.OK);
	}
	
	interface SearchParamArtistView extends Artist.Basic{};
	@JsonView(SearchParamArtistView.class)
	@RequestMapping("/api/Artist/SearchByArtist")
	public ResponseEntity<Artist> getSearchByParamArtist(
			@RequestParam(value = "key") String key) throws Exception{
		Artist artist=artistService.findByName(key);
		return new ResponseEntity<>(artist,HttpStatus.OK);
	}
	
	interface SearchView extends Tag.Basic,Tag.TagPlaylists,Playlist.Basic{};
	@JsonView(SearchView.class)
	@RequestMapping("/api/Playlist/Search/{key}")
	public ResponseEntity<List<Playlist>> getSearchByTag(@PathVariable String key) throws Exception{
		Tag t=tagService.findByName(key);
		List<Tag> tags=new ArrayList<>();
		tags.add(t);
		List<Playlist> playlists=playlistService.findByTagsOfPlaylist(tags);
		return new ResponseEntity<>(playlists,HttpStatus.OK);
	}
	
	interface TopTagView extends Tag.Basic{};
	@JsonView(TopTagView.class)
	@RequestMapping("/api/Tag/Top3")
	public ResponseEntity<List<Tag>> getTopTags() throws Exception{
		List<Tag>topTags=tagService.findTop3ByOrderByNumberTagDesc();
		return new ResponseEntity<>(topTags,HttpStatus.OK);
	}
	
	
	
}
