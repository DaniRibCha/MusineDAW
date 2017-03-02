package com.example;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

import java.util.List;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_user;
	
	private String name;
	
	private String country;
	
	//private String biography;
	
	private String City;
	
	private String passwordHash;
	
	@ElementCollection(fetch = FetchType.EAGER) 
	private List<String> roles;
	
	//@ManyToMany
	//private List<User> followers;
	
	//@ManyToMany
	//private List<User> following;
	
	@OneToMany
	private List<Song> favoriteSongs;
	
	@ManyToMany
	private List<Playlist> likedPlaylists;
	
	@OneToMany
	private List<Playlist> createdPlaylists;
	
	public User() {
	}


	public User(String name, String country) {
		super();
		this.name = name;
		this.country = country;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}


	public String getCity() {
		return City;
	}


	public void setCity(String city) {
		City = city;
	}


	public String getPasswordHash() {
		return passwordHash;
	}


	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}


	public List<String> getRoles() {
		return roles;
	}


	public void setRoles(List<String> roles) {
		this.roles = roles;
	}


	public List<Song> getFavoriteSongs() {
		return favoriteSongs;
	}


	public void setFavoriteSongs(List<Song> favoriteSongs) {
		this.favoriteSongs = favoriteSongs;
	}


	public List<Playlist> getLikedPlaylists() {
		return likedPlaylists;
	}


	public void setLikedPlaylists(List<Playlist> likedPlaylists) {
		this.likedPlaylists = likedPlaylists;
		for(int i=0;i<likedPlaylists.size();++i)
			likedPlaylists.get(i).setnLikes(likedPlaylists.get(i).getnLikes()+1);
	}


	public List<Playlist> getCreatedPlaylists() {
		return createdPlaylists;
	}


	public void setCreatedPlaylists(List<Playlist> createdPlaylists) {
		this.createdPlaylists = createdPlaylists;
	}
	
	
	
//	public List<User> getFollowers() {
//		return followers;
//	}
//
//
//	public void setFollowers(List<User> followers) {
//		this.followers = followers;
//	}
//
//
//	public List<User> getFollowing() {
//		return following;
//	}
//
//
//	public void setFollowing(List<User> following) {
//		this.following = following;
//	}
	
	
	
	

}
