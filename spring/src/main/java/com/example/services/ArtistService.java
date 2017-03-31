package com.example.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.classes.Artist;
import com.example.repositories.ArtistRepository;

@Service
public class ArtistService {
	
	@Autowired
	ArtistRepository artistRepository;
	
	public Artist findOne(long id) {
		return artistRepository.findOne(id);
	}
	
	public List<Artist> findAll() {
		return artistRepository.findAll();
	}
	
	public void save(Artist artists) {
		artistRepository.save(artists);
	}
	
	public void delete(long id) {
		artistRepository.delete(id);
	}
	
	public void delete(Artist a) {
		artistRepository.delete(a);
	}
	
	public Artist findByName(String name) {
		return artistRepository.findByName(name);
	}
	
	public List<Artist> findTop3ByOrderByFollowersDesc() {
		List<Artist> artistsTop=artistRepository.findByOrderByFollowersDesc();
		List<Artist> topArtists=new ArrayList<>();
		for(int i=0;i<3;++i){
			topArtists.add(artistsTop.get(i));
		}
		return topArtists;
	}
	
	

}
