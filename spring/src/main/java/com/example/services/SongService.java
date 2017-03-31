package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.SongRepository;

@Service
public class SongService {
	
	@Autowired
	SongRepository songRepository;
	

	public Song findOne(long id) {
		return songRepository.findOne(id);
	}
	
	public List<Song> findAll() {
		return songRepository.findAll();
	}
	
	public void save(Song song) {
		songRepository.save(song);
	}
	
	public void delete(long id) {
		songRepository.delete(id);
	}
	
	public Page<Song> findByUsersFavoriteSong(List<User> users,Pageable page){
		return songRepository.findByUsersFavoriteSong(users,page);
	}
	
	public Page<Song> findByPlaylistsOfSong(List<Playlist> playlist, Pageable page){
		return songRepository.findByPlaylistsOfSong(playlist,page);
	}
	
	public Page<Song> findByArtistsOfSong(List<Artist> artists,Pageable page){
		return songRepository.findByArtistsOfSong(artists,page);
	}
	
	public Song findByArtistsOfSongAndTitle(List<Artist> artists,String title){
		return songRepository.findByArtistsOfSongAndTitle(artists, title);
	}

}
