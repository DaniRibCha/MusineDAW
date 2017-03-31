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
	
	public List<Playlist> findTop3ByOrderByNLikesDesc(){
		List<Playlist> playlistsTop=playlistRepository.findByOrderByNLikesDesc();
		List<Playlist> topPlaylists=new ArrayList<>();
		for(int i=0;i<3;++i){
			topPlaylists.add(playlistsTop.get(i));
		}
		return topPlaylists;
	}
	
	public List<Playlist> findByTagsOfPlaylist(List<Tag> tags){
		return playlistRepository.findByTagsOfPlaylist(tags);
	}
	
	public List<Playlist> findFirst100ByOrderByDateAsc(){
		return playlistRepository.findFirst100ByOrderByDateAsc();
	}
	
	public Page<Playlist> findFirst100ByOrderByDateAsc(Pageable page){
		return playlistRepository.findFirst100ByOrderByDateAsc(page);
	}
	
	public List<Playlist> findByUserlikesOfPlaylist(List<User> users){
		return playlistRepository.findByUserlikesOfPlaylist(users);
	}
	
	public List<Playlist> findByCreatorId(long id){
		return playlistRepository.findByCreatorId(id);
	}
	
	public List<Playlist> findByCreatorIdList(long id){
		return playlistRepository.findByCreatorId(id);
	}
}
