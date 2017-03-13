package com.example;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class SongController {
	
	@Autowired
	private SongRepository songRepository;
	
	@JsonView(Song.Basic.class)
	@RequestMapping("/SongListBasic")
	public Page<Song> getSongsBasic(Pageable page) throws Exception{
		return songRepository.findAll(page);
	}
	
	
	interface SongArtistView extends Song.Basic, Song.Artists, Artist.Basic{};
	
	@JsonView(SongArtistView.class)
	@RequestMapping("/ArtistSong/{id}")
	public Song getSongArtists(@PathVariable long id) throws Exception{
		return songRepository.findOne(id);
	}

}
