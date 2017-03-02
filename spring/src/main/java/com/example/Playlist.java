package com.example;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;

import java.util.List;

import java.sql.Date;

@Entity
public class Playlist {
	
	public interface Basic {}
	
	public interface Songs {}
	
	public interface Tags{}
	
	@JsonView(Basic.class)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_playlist;
	
	@JsonView(Basic.class)
	private String title;
	
	@JsonView(Basic.class)
	private String creator;
	
	@JsonView(Basic.class)
	private long nReproductions;
	
	@JsonView(Basic.class)
	private long nLikes;
	
	@JsonView(Basic.class)
	private long nTracks;
	
	@JsonView(Basic.class)
	private Date date;
	
	@JsonView(Songs.class)
	@ManyToMany
	private List<Song> songsOfPlaylist;
	
	@JsonView(Tags.class)
	@ManyToMany
	private List<Tag> tagsOfPlaylist;
	
	@ManyToMany(mappedBy="likedPlaylists")
	private List<User> UserlikesOfPlaylist;
	
	
	public Playlist(String title, String creator) {
		super();
		this.title = title;
		this.nReproductions = 0;
		java.util.Date utilDate = new java.util.Date();
		this.date = new java.sql.Date(utilDate.getTime());
		this.creator=creator;
	}
	
	public Playlist() {}
	
	public List<Song> getSongsOfPlaylist() {
		return songsOfPlaylist;
	}

	public void setSongsOfPlaylist(List<Song> songsOfPlaylist) {
		this.songsOfPlaylist = songsOfPlaylist;
		nTracks=nTracks+songsOfPlaylist.size();
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public long getnReproductions() {
		return nReproductions;
	}

	public void setnReproductions(long nReproductions) {
		this.nReproductions = nReproductions;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	
	public List<Tag> getTagsOfPlaylist() {
		return tagsOfPlaylist;
	}

	public void setTagsOfPlaylist(List<Tag> tagsOfPlaylist) {
		this.tagsOfPlaylist = tagsOfPlaylist;
	}
	
	

	public List<User> getUserlikesOfPlaylist() {
		return UserlikesOfPlaylist;
	}

	public void setUserlikesOfPlaylist(List<User> userlikesOfPlaylist) {
		UserlikesOfPlaylist = userlikesOfPlaylist;
	}
	
	

	public long getnLikes() {
		return nLikes;
	}

	public void setnLikes(long nLikes) {
		this.nLikes = nLikes;
	}

	@Override
	public String toString() {
		return "Playlist [id_playlist=" + id_playlist + ", title=" + title + ", nReproductions=" + nReproductions
				+ ", date=" + date + "]";
	}
	
	

}
