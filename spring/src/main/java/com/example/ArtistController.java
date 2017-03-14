package com.example;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.fasterxml.jackson.annotation.JsonView;

@RestController
public class ArtistController {

	@Autowired
	private ArtistRepository artistRepository;
	
	//@JsonView(Artist.Basic.class)
	//@RequestMapping("/ArtistListBasic")
	//public List<Artist> getArtistsBasic() throws Exception{
		//return artistRepository.findAll();
	//}
	
	
	interface ArtistSongsView extends Artist.Basic, Artist.Songs, Song.Basic{};
	
	@JsonView(ArtistSongsView.class)
	@RequestMapping("/SongsArtist/{id}")
	public Artist getArtistSongs(@PathVariable long id) throws Exception{
		return artistRepository.findOne(id);
	}
	
	interface ArtistTagsView extends Artist.Basic, Artist.Tags, Tag.Basic{}
	
	@JsonView(ArtistTagsView.class)
	@RequestMapping("/TagsArtist/{id}")
	public Artist getArtistTags(@PathVariable long id) throws Exception{
		return artistRepository.findOne(id);
	}
	
}
