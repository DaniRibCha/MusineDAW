package com.example;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_user;
	
	private String name;
	
	private String country;
	
	private String biography;
	
	private String City;
	
	private String passwordHash;
	
	@ElementCollection(fetch = FetchType.EAGER) 
	private List<String> roles;
	
	@ManyToMany
	private List<User> following = new ArrayList<>();
	
	@ManyToMany(mappedBy="following")
	private List<User> followers = new ArrayList<>();	
	
	@OneToMany
	private List<Song> favoriteSongs= new ArrayList<>();
	
	@ManyToMany(mappedBy="UserlikesOfPlaylist")
	private List<Playlist> likedPlaylists= new ArrayList<>();
	
	@OneToMany(cascade=CascadeType.ALL)
	private List<Playlist> createdPlaylists= new ArrayList<>();
	
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


	public void addFavoriteSong(Song favoriteSong) {
		this.favoriteSongs.add(favoriteSong);
	}


	public List<Playlist> getLikedPlaylists() {
		return likedPlaylists;
	}


	public void addLikedPlaylist(Playlist likedPlaylist) {
		this.likedPlaylists.add(likedPlaylist);
	}


	public List<Playlist> getCreatedPlaylists() {
		return createdPlaylists;
	}


	public void addCreatedPlaylist(Playlist createdPlaylist) {
		this.createdPlaylists.add(createdPlaylist);
	}


	public String getBiography() {
		return biography;
	}


	public void setBiography(String biography) {
		this.biography = biography;
	}


	public List<User> getFollowing() {
		return following;
	}


	public void addFollowing(User following) {
		this.following.add(following);
	}


	public List<User> getFollowers() {
		return followers;
	}


	public void addFollowers(User followers) {
		this.followers.add(followers);
	}
	

}
