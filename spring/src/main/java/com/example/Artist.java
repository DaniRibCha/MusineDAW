package com.example;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Artist {
	
	public interface BasicAtt {}
	
	public interface SongAtt{}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_artist;
	
	@JsonView(BasicAtt.class)
	private String name;
	
	@JsonView(BasicAtt.class)
	private String country;
	
	@JsonView(SongAtt.class)
	@ManyToMany(mappedBy="artistsOfSong")
	private List<Song> songsOfArtist;
	
	
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


	public void setSongsOfArtist(List<Song> songsOfArtist) {
		this.songsOfArtist = songsOfArtist;
	}


	@Override
	public String toString() {
		return "Artist [id_artist=" + id_artist + ", name=" + name + ", country=" + country + "]";
	}
	
	

}
