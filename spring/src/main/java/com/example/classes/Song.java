package com.example.classes;

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
public class Song{
	
	public interface Basic {}
	
	public interface Artists{}
	
	public interface Playlists{}
	
	public interface Favorites{}
	 
	@JsonView(Basic.class)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id_song;
	
	@JsonView(Basic.class)
	private String title;
	
	@JsonView(Basic.class)
	private String link_youtube;
	
	@JsonView(Artists.class)
	@ManyToMany
	private List<Artist> artistsOfSong= new ArrayList<>();
	
	@JsonView(Playlists.class)
	@ManyToMany(mappedBy="songsOfPlaylist")
	private List<Playlist> playlistsOfSong= new ArrayList<>();
	
//	@OneToMany(mappedBy="favoriteSongs")
//	private List<User> usersFavoriteSong= new ArrayList<>();
	
	@ManyToMany(mappedBy="favoriteSongs")
	@JsonView(Favorites.class)
	private List<User> usersFavoriteSong= new ArrayList<>();
	
	@JsonView(Basic.class)
	private boolean isIdLogged;
	
	public Song(String title, String link_youtube) {
		super();
		this.title = title;
		this.link_youtube = link_youtube;
		isIdLogged=false;
	}
	
	public Song() {
		super();
		// TODO Auto-generated constructor stub
	}



	public boolean isIdLogged() {
		return isIdLogged;
	}

	public void setIdLogged(boolean isIdLogged) {
		this.isIdLogged = isIdLogged;
	}
	
	public List<User> getUsersFavoriteSong() {
		return usersFavoriteSong;
	}

	public void setUsersFavoriteSong(List<User> usersFavoriteSong) {
		this.usersFavoriteSong = usersFavoriteSong;
	}

	public List<Playlist> getPlaylistsOfSong() {
		return playlistsOfSong;
	}

	//entidad principal->Playlist
	public void addPlaylistsOfSong(Playlist playlistOfSong) {
		this.playlistsOfSong.add(playlistOfSong);
	}
	
	public long getId_song() {
		return id_song;
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

	public void addArtistsOfSong(Artist artistOfSong) {
		this.artistsOfSong.add(artistOfSong);
	}
	
	public void removeArtistsOfSong(Artist artistOfSong) {
		this.artistsOfSong.remove(artistOfSong);
	}

	@Override
	public String toString() {
		return "Song [id_song=" + id_song + ", title=" + title + ", link_youtube=" + link_youtube + "]";
	}
}