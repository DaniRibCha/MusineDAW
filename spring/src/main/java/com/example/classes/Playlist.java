package com.example.classes;

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
import java.util.Calendar;
import java.util.List;

import java.sql.Date;

@Entity
public class Playlist {
	
	public interface Basic {}
	
	public interface Songs {}
	
	public interface Tags{}
	
	public interface Likes{}
	
	
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
	
	@JsonView(Likes.class)
	@ManyToMany
	private List<User> userlikesOfPlaylist= new ArrayList<>();
	
	private boolean isIdLogged;
	
	private boolean likedByLogged;
	
	
	
	public Playlist(String title, String creatorName, long creatorId) {
		super();
		this.title = title;
		this.nLikes=0;
		this.nTracks=0;
		this.description="";
		Calendar calobj = Calendar.getInstance();
		java.sql.Date currentSysDate = new java.sql.Date(calobj.getTime().getTime());
		this.date = currentSysDate;
		this.creatorName=creatorName;
		this.creatorId=creatorId;
		this.isIdLogged=false;
		this.likedByLogged=false;
	}
	
	public Playlist() {}
	
	
	
	public void setId_playlist(long id_playlist) {
		this.id_playlist = id_playlist;
	}

	public boolean isLikedByLogged() {
		return likedByLogged;
	}

	public void setLikedByLogged(boolean likedByLogged) {
		this.likedByLogged = likedByLogged;
	}

	public boolean isIdLogged() {
		return isIdLogged;
	}

	public void setIdLogged(boolean isIdLogged) {
		this.isIdLogged = isIdLogged;
	}

	public long getId_playlist() {
		return id_playlist;
	}

	public List<Song> getSongsOfPlaylist() {
		return songsOfPlaylist;
	}

	public void addSongOfPlaylist(Song songOfPlaylist) {
		this.songsOfPlaylist.add(songOfPlaylist);
		this.nTracks=this.nTracks+1;
	}
	
	public void removeSongOfPlaylist(Song songOfPlaylist) {
		this.songsOfPlaylist.remove(songOfPlaylist);
		this.nTracks=this.nTracks-1;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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
		if(this.tagsOfPlaylist.size()<5){
			this.tagsOfPlaylist.add(tagOfPlaylist);
			tagOfPlaylist.incNumberTag();
		}
	}
	
	public void removeTagOfPlaylist(Tag tagOfPlaylist) {
		if(this.tagsOfPlaylist.size()>0){
			this.tagsOfPlaylist.remove(tagOfPlaylist);
			tagOfPlaylist.decNumberTag();
		}
	}

	public List<User> getUserlikesOfPlaylist() {
		return userlikesOfPlaylist;
	}

	public void addUserlikeOfPlaylist(User userlikeOfPlaylist) {
		this.userlikesOfPlaylist.add(userlikeOfPlaylist);
		addLike();
	}
	
	public void removeUserlikeOfPlaylist(User userlikeOfPlaylist) {
		this.userlikesOfPlaylist.remove(userlikeOfPlaylist);
		decLike();
	}
	

	public long getnLikes() {
		return nLikes;
	}

	public void addLike() {
		this.nLikes =this.nLikes+1 ;
	}
	
	public void decLike() {
		this.nLikes =this.nLikes-1 ;
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
