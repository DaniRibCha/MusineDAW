package com.example.classes;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.example.classes.Tag.Basic;
import com.example.restcontrollers.UserJsonSerialize;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonView;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Entity
@JsonSerialize(using = UserJsonSerialize.Serializer.class)
public class User {
	
	public interface Basic{}
	
	public interface Playlists{}
	
	public interface Likes{}
	
	public interface Favorites{}
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@JsonView(Basic.class)
	private long id_user;
	
	@JsonView(Basic.class)
	@Column(unique=true)
	private String name;
	
	@JsonView(Basic.class)
	private String country;
	
	private String biography;
	
	@JsonView(Basic.class)
	private String city;
	
	private String passwordHash;
	
	@JsonView(Basic.class)
	private String email;
	
	private String profileImage;
	
	private boolean isIdLogged;
	
	@ElementCollection(fetch = FetchType.EAGER) 
	private List<String> roles = new ArrayList<>();;
	
	@ManyToMany(mappedBy="followersOfArtist")
	@JsonIgnore
	private List<Artist> followingArtists= new ArrayList<>();
	
	@ManyToMany
	@JsonIgnore
	private List<User> following = new ArrayList<>();
	
	@ManyToMany(mappedBy="following")
	@JsonIgnore
	private List<User> followers = new ArrayList<>();	
	
	@ManyToMany
	@JsonIgnore
	private List<Song> favoriteSongs = new ArrayList<>();
	
	@ManyToMany(mappedBy="userlikesOfPlaylist")
	@JsonIgnore
	private List<Playlist> likedPlaylists= new ArrayList<>();
	
	@OneToMany(cascade=CascadeType.ALL)
	@JsonIgnore
	private List<Playlist> createdPlaylists= new ArrayList<>();
	
	public User() {
	}


	public User(String name, String country,String passwordHash, String email,String... roles) {
		super();
		this.biography="";
		this.city="";
		this.name = name;
		this.country = country;
		this.email=email;
		this.passwordHash = new BCryptPasswordEncoder().encode(passwordHash);
		this.roles = new ArrayList<>(Arrays.asList(roles));
		this.profileImage="user.jpg";
		this.isIdLogged=false;
	}
	
	

	public boolean isIdLogged() {
		return isIdLogged;
	}


	public void setIdLogged(boolean isIdLogged) {
		this.isIdLogged = isIdLogged;
	}


	public String getProfileImage() {
		return profileImage;
	}


	public void setProfileImage(String profileImage) {
		this.profileImage = profileImage;
	}


	public long getId_user() {
		return id_user;
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
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getPasswordHash() {
		return passwordHash;
	}


	public void setPasswordHash(String passwordHash) {
		this.passwordHash = new BCryptPasswordEncoder().encode(passwordHash);
	}


	public List<String> getRoles() {
		return roles;
	}


	public void addRole(String role) {
		this.roles.add(role);
	}

	public List<Song> getFavoriteSongs() {
		return favoriteSongs;
	}

	public void addFavoriteSong(Song favoriteSong) {
		this.favoriteSongs.add(favoriteSong);
	}
	
	public void removeFavoriteSong(Song favoriteSong) {
		this.favoriteSongs.remove(favoriteSong);
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
	
	public void removeCreatedPlaylist(Playlist createdPlaylist) {
		this.createdPlaylists.remove(createdPlaylist);
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
	
	public void removeFollowing(User following) {
		this.following.remove(following);
	}


	public List<User> getFollowers() {
		return followers;
	}
	
	public void addFollowers(User followers) {
		this.followers.add(followers);
	}
	
	


	public List<Artist> getFollowingArtists() {
		return followingArtists;
	}


	public void setFollowingArtists(List<Artist> followingArtists) {
		this.followingArtists = followingArtists;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	
	

}
