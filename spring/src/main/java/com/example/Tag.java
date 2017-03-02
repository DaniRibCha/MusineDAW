package com.example;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Tag {
	
	public interface Basic{}
	
	public interface Artists{}
	
	public interface Tags{}
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id_tag;
	
	@JsonView(Basic.class)
	private String name;
	
	@JsonView(Artists.class)
	@ManyToMany(mappedBy="tagsOfArtist")
	private List<Artist> artistsOfTag;
	
	@JsonView(Tags.class)
	@ManyToMany(mappedBy="tagsOfPlaylist")
	private List<Playlist> playlistsOfTag;

	public Tag(String name) {
		super();
		this.name = name;
	}

	public Tag() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	
	
}
