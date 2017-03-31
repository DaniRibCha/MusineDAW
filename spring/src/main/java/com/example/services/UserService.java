package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.classes.Artist;
import com.example.classes.User;
import com.example.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;
	
	public User findOne(long id) {
		return userRepository.findOne(id);
	}
	
	public List<User> findAll() {
		return userRepository.findAll();
	}
	
	public void save(User user) {
		userRepository.save(user);
	}
	
	public void delete(long id) {
		userRepository.delete(id);
	}
	
	public User findByName(String name) {
		return userRepository.findByName(name);
	}
	
	public User findByEmail(String email) {
		User user = null;
		
		for(User u : userRepository.findAll()){
			if(u.getEmail() == email){
				user = u;
				break;
			}
		}
		return user;
	}
	
	public Page<User> findByFollowingArtists(List<Artist> artist, Pageable page){
		return userRepository.findByFollowingArtists(artist, page);
	}
	
	public Page<User> findByFollowing(List<User> userFollowed, Pageable page){
		return userRepository.findByFollowing(userFollowed, page);
	}
	
	public Page<User> findByFollowers(List<User> userFollowing, Pageable page){
		return userRepository.findByFollowers(userFollowing, page);
	}
	
}