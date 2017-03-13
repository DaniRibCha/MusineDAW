package com.example;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Artist {
	
	public interface Basic {}
	
	public interface Songs{}
	
	public interface Tags{}
	
	@JsonView(Basic.class)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_artist;
	
	@JsonView(Basic.class)
	private String name;
	
	@JsonView(Basic.class)
	private String country;
	
	@JsonView(Songs.class)
	@ManyToMany(mappedBy="artistsOfSong")
	private List<Song> songsOfArtist= new ArrayList<>();
	
	@OneToMany
	private List<User> followersOfArtist= new ArrayList<>();
	
	@JsonView(Tags.class)
	@ManyToMany
	private List<Tag> tagsOfArtist= new ArrayList<>();
	
	
	public Artist() {
	}


	public Artist(String name, String country) {
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


	public List<Song> getSongsOfArtist() {
		return songsOfArtist;
	}

	//entidad principal->Song
	public void addSongOfArtist(Song songOfArtist) {
		this.songsOfArtist.add(songOfArtist);
	}

	

	public List<User> getFollowersOfArtist() {
		return followersOfArtist;
	}


	public void addFollowerOfArtist(User followerOfArtist) {
		this.followersOfArtist.add(followerOfArtist);
	}


	public List<Tag> getTagsOfArtist() {
		return tagsOfArtist;
	}


	public void addTagOfArtist(Tag tagOfArtist) {
		this.tagsOfArtist.add(tagOfArtist);
	}


	@Override
	public String toString() {
		return "Artist [id_artist=" + id_artist + ", name=" + name + ", country=" + country + "]";
	}
	
	

}
