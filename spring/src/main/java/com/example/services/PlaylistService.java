package com.example.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.PlaylistRepository;

@Service
public class PlaylistService {

	@Autowired
	PlaylistRepository playlistRepository;
	
	public Playlist findOne(long id) {
		return playlistRepository.findOne(id);
	}
	
	public List<Playlist> findAll() {
		return playlistRepository.findAll();
	}
	
	public void save(Playlist playlist) {
		playlistRepository.save(playlist);
	}
	
	public void delete(long id) {
		playlistRepository.delete(id);
	}
	
	public List<Playlist> findByTitle(String title){
		return playlistRepository.findByTitle(title);
	}
	
	public List<Playlist> findTop10ByOrderByNLikesDesc(){
		List<Playlist> playlistsTop=playlistRepository.findByOrderByNLikesDesc();
		List<Playlist> topPlaylists=new ArrayList<>();
		for(int i=0;i<10;++i){
			topPlaylists.add(playlistsTop.get(i));
		}
		return topPlaylists;
	}
	
	public List<Playlist> findByTagsOfPlaylist(List<Tag> tags){
		return playlistRepository.findByTagsOfPlaylist(tags);
	}
	
	public Page<Playlist> findFirst100ByOrderByDateAsc(Pageable page){
		return playlistRepository.findFirst100ByOrderByDateAsc(page);
	}
	
	public Page<Playlist> findByUserlikesOfPlaylist(List<User> users, Pageable page){
		return playlistRepository.findByUserlikesOfPlaylist(users,page);
	}
	
	public Page<Playlist> findByCreatorId(long id, Pageable page){
		return playlistRepository.findByCreatorId(id,page);
	}
	
	public List<Playlist> findByCreatorIdList(long id){
		return playlistRepository.findByCreatorId(id);
	}
}
