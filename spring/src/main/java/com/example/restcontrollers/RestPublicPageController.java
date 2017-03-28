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
import com.example.services.PlaylistService;
import com.example.services.TagService;
import com.example.services.UserService;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class RestPublicPageController {
	
	@Autowired
	UserService userService;
	
	@Autowired
	PlaylistService playlistService;
	
	@Autowired
	TagService tagService;
	
	interface UserFollowersView extends User.Basic, User.Followers{};
	@JsonView(UserFollowersView.class)
	@RequestMapping("/api/UserFollowers/{id}")
	public ResponseEntity<User> getUserFollowers(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		return new ResponseEntity<>(u,HttpStatus.OK);
	}
	
	interface UserFollowingView extends User.Basic, User.Following{};
	@JsonView(UserFollowingView.class)
	@RequestMapping("/api/UserFollowing/{id}")
	public ResponseEntity<User> getUserFollowing(@PathVariable long id) throws Exception{
		User u=userService.findOne(id);
		return new ResponseEntity<>(u,HttpStatus.OK);
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
	
//	interface SearchView extends Playlist.Basic,Playlist.Tags,Tag.Basic{};
//	@JsonView(SearchView.class)
//	@RequestMapping("/api/SearchPlaylist")
//	public ResponseEntity<List<Playlist>> getSearchByTag(
//			@RequestParam(value = "key", defaultValue = "") String key) throws Exception{
//		List<Tag> tags=new ArrayList<>();
//		tags.add(new Tag(key));
//		List<Playlist> playlists=playlistService.findByTagsOfPlaylist(tags);
//		return new ResponseEntity<>(playlists,HttpStatus.OK);
//	}
	
	interface SearchParamView extends Tag.Basic,Tag.TagPlaylists,Playlist.Basic{};
	@JsonView(SearchParamView.class)
	@RequestMapping("/api/SearchPlaylist")
	public ResponseEntity<List<Playlist>> getSearchByParam(
			@RequestParam(value = "key") String key) throws Exception{
		Tag t=tagService.findByName(key);
		List<Tag> tags=new ArrayList<>();
		tags.add(t);
		List<Playlist> playlists=playlistService.findByTagsOfPlaylist(tags);
		return new ResponseEntity<>(playlists,HttpStatus.OK);
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
	
}
