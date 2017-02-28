package com.example;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Song{
	
	public interface BasicAtt {}
	
	public interface ArtistAtt{}
	
	@JsonView(BasicAtt.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id_song;
	
	@JsonView(BasicAtt.class)
	private String title;
	
	@JsonView(BasicAtt.class)
	private String link_youtube;
	
	@JsonView(ArtistAtt.class)
	@ManyToMany
	private List<Artist> artistsOfSong;
	
	public Song(String title, String link_youtube) {
		super();
		this.title = title;
		this.link_youtube = link_youtube;
	}
	
	protected Song() {
	}


	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getLink_youtube() {
		return link_youtube;
	}

	public void setLink_youtube(String link_youtube) {
		this.link_youtube = link_youtube;
	}

	public List<Artist> getArtistsOfSong() {
		return artistsOfSong;
	}

	public void setArtistsOfSong(List<Artist> artistsOfSong) {
		this.artistsOfSong = artistsOfSong;
	}

	@Override
	public String toString() {
		return "Song [id_song=" + id_song + ", title=" + title + ", link_youtube=" + link_youtube + "]";
	}
	
	
	
}