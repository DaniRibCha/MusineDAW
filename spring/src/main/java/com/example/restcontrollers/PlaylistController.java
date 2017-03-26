package com.example.restcontrollers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.repositories.PlaylistRepository;
import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class PlaylistController {
	
	@Autowired 
	private PlaylistRepository playlistRepository;
	
	interface PlaylistSongsView extends Playlist.Basic, Playlist.Songs, Song.Basic{}
	
	@JsonView(PlaylistSongsView.class)
	@RequestMapping("/PlaylistSongs/{id}")
	public Playlist getPlaylistSongs(@PathVariable long id) throws Exception{
		return playlistRepository.findOne(id);
	}
	
	interface PlaylistTagsView extends Playlist.Basic, Playlist.Tags, Tag.Basic{};
	
	@JsonView(PlaylistTagsView.class)
	@RequestMapping("/PlaylistTags/{id}")
	public Playlist getPlaylistTags(@PathVariable long id) throws Exception{
		return playlistRepository.findOne(id);
	}

}
