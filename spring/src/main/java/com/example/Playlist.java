package com.example;

import javax.persistence.CascadeType;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonView;

import java.util.ArrayList;
import java.util.List;

import java.sql.Date;

@Entity
public class Playlist {
	
	public interface Basic {}
	
	public interface Songs {}
	
	public interface Tags{}
	
	public interface Creator{}
	
	@JsonView(Basic.class)
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_playlist;
	
	@JsonView(Basic.class)
	private String title;
	
	@JsonView(Basic.class)
	private String creatorName;
	
	@JsonView(Basic.class)
	private long creatorId;
	
//	@JsonView(Basic.class)
//	private long nReproductions;
	
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
	
//	@OneToOne(mappedBy="createdPlaylists")
//	private List<User> CreatorOfPlaylist=new ArrayList<>();
	
	
	public Playlist(String title, String creatorName, long creatorId) {
		super();
		this.title = title;
		//this.nReproductions = 0;
		this.nLikes=0;
		this.nTracks=0;
		this.description="";
		java.util.Date utilDate = new java.util.Date();
		this.date = new java.sql.Date(utilDate.getTime());
		this.creatorName=creatorName;
		this.creatorId=creatorId;
		
	}
	
	public Playlist() {}
	
	public List<Song> getSongsOfPlaylist() {
		return songsOfPlaylist;
	}

	public void addSongOfPlaylist(Song songOfPlaylist) {
		this.songsOfPlaylist.add(songOfPlaylist);
		this.nTracks=this.nTracks+1;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

//	public long getnReproductions() {
//		return nReproductions;
//	}
//
//	public void setnReproductions(long nReproductions) {
//		this.nReproductions = nReproductions;
//	}

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
		tagOfPlaylist.incNumberTag();
	}
	
	

	public List<User> getUserlikesOfPlaylist() {
		return UserlikesOfPlaylist;
	}

	public void addUserlikeOfPlaylist(User userlikeOfPlaylist) {
		this.UserlikesOfPlaylist.add(userlikeOfPlaylist);
		this.nLikes =+ 1;
	}
	
	public void removeUserlikeOfPlaylist(User userlikeOfPlaylist) {
		this.UserlikesOfPlaylist.remove(userlikeOfPlaylist);
		this.nLikes =- 1;
	}
	

	public long getnLikes() {
		return nLikes;
	}

	public void addLike() {
		this.nLikes =+ 1;
	}
	
	

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	
	public String getCreatorName() {
		return creatorName;
	}

	public void setCreatorName(String creatorName) {
		this.creatorName = creatorName;
	}

	public long getCreatorId() {
		return creatorId;
	}

	public void setCreatorId(long creatorId) {
		this.creatorId = creatorId;
	}

	@Override
	public String toString() {
		return "Playlist [id_playlist=" + id_playlist + ", title=" + title
				+ ", date=" + date + "]";
	}
	
	

}
