package com.example;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonView;

import java.util.ArrayList;
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
	
	@JsonView(Basic.class)
	private String description;
	
	@JsonView(Songs.class)
	@ManyToMany
	private List<Song> songsOfPlaylist= new ArrayList<>();
	
	@JsonView(Tags.class)
	@ManyToMany
	private List<Tag> tagsOfPlaylist= new ArrayList<>();
	
	@ManyToMany
	private List<User> UserlikesOfPlaylist= new ArrayList<>();
	
	
	public Playlist(String title, String creator) {
		super();
		this.title = title;
		this.nReproductions = 0;
		this.nLikes=0;
		this.nTracks=0;
		this.description="";
		java.util.Date utilDate = new java.util.Date();
		this.date = new java.sql.Date(utilDate.getTime());
		this.creator=creator;
	}
	
	public Playlist() {}
	
	public List<Song> getSongsOfPlaylist() {
		return songsOfPlaylist;
	}

	public void addSongOfPlaylist(Song songOfPlaylist) {
		this.songsOfPlaylist.add(songOfPlaylist);
		this.nTracks=this.nTracks+songsOfPlaylist.size();
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
	

	public void addTagOfPlaylist(Tag tagOfPlaylist) {
		this.tagsOfPlaylist.add(tagOfPlaylist);
	}
	
	

	public List<User> getUserlikesOfPlaylist() {
		return UserlikesOfPlaylist;
	}

	//entidad principal->User
	public void addUserlikeOfPlaylist(User userlikeOfPlaylist) {
		this.UserlikesOfPlaylist.add(userlikeOfPlaylist);
	}
	
	

	public long getnLikes() {
		return nLikes;
	}

	public void setnLikes(long nLikes) {
		this.nLikes = nLikes;
	}
	
	

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public String toString() {
		return "Playlist [id_playlist=" + id_playlist + ", title=" + title + ", nReproductions=" + nReproductions
				+ ", date=" + date + "]";
	}
	
	

}
