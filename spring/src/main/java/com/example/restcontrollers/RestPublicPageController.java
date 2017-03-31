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
	

	
	interface UserFollowView extends User.Basic{};
	@JsonView(UserFollowView.class)
	@RequestMapping("/api/UserFollowers/{id}")
	public ResponseEntity<String> getUserFollow(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		String uSerialized = new ObjectMapper().writeValueAsString(u);
		return new ResponseEntity<>(uSerialized,HttpStatus.OK);
	}
	
	interface UserPlaylistsView extends User.Basic,User.Playlists,Playlist.Basic{};
	@JsonView(UserPlaylistsView.class)
	@RequestMapping("/api/UserPlaylists/{id}")
	public ResponseEntity<User> getUserPlaylists(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		return new ResponseEntity<>(u,HttpStatus.OK);
	}
	
	interface UserLikesView extends User.Basic,User.Likes,Playlist.Basic{};
	@JsonView(UserLikesView.class)
	@RequestMapping("/api/UserLikes/{id}")
	public ResponseEntity<User> getUserLikes(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		return new ResponseEntity<>(u,HttpStatus.OK);
	}
	
	interface UserFavoritesView extends User.Basic,User.Favorites,Song.Basic{};
	@JsonView(UserFavoritesView.class)
	@RequestMapping("/api/UserFavorites/{id}")
	public ResponseEntity<User> getUserFavorites(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		return new ResponseEntity<>(u,HttpStatus.OK);
	}
	
	interface SearchParamTagView extends Playlist.Basic,Playlist.Tags,Tag.Basic{};
	@JsonView(SearchParamTagView.class)
	@RequestMapping("/api/SearchPlaylistByTag")
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
	@RequestMapping("/api/SearchPlaylistByTitle")
	public ResponseEntity<List<Playlist>> getSearchByParamTitle(
			@RequestParam(value = "key") String key) throws Exception{
		List<Playlist> playlists=playlistService.findByTitle(key);
		return new ResponseEntity<>(playlists,HttpStatus.OK);
	}
	
	interface SearchParamArtistView extends Artist.Basic{};
	@JsonView(SearchParamArtistView.class)
	@RequestMapping("/api/SearchPlaylistByArtist")
	public ResponseEntity<Artist> getSearchByParamArtist(
			@RequestParam(value = "key") String key) throws Exception{
		Artist artist=artistService.findByName(key);
		return new ResponseEntity<>(artist,HttpStatus.OK);
	}
	
	interface SearchView extends Tag.Basic,Tag.TagPlaylists,Playlist.Basic{};
	@JsonView(SearchView.class)
	@RequestMapping("/api/SearchPlaylist/{key}")
	public ResponseEntity<List<Playlist>> getSearchByTag(@PathVariable String key) throws Exception{
		Tag t=tagService.findByName(key);
		List<Tag> tags=new ArrayList<>();
		tags.add(t);
		List<Playlist> playlists=playlistService.findByTagsOfPlaylist(tags);
		return new ResponseEntity<>(playlists,HttpStatus.OK);
	}
	
	interface TopTagView extends Tag.Basic{};
	@JsonView(TopTagView.class)
	@RequestMapping("/api/Top3Tags")
	public ResponseEntity<List<Tag>> getTopTags() throws Exception{
		List<Tag>topTags=tagService.findTop3ByOrderByNumberTagDesc();
		return new ResponseEntity<>(topTags,HttpStatus.OK);
	}
	
	
	
}
