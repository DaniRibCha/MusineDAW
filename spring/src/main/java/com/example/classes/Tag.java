package com.example.classes;

import java.util.ArrayList;
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
	
	@JsonView(Basic.class)
	private long numberTag;
	
	@JsonView(Artists.class)
	@ManyToMany(mappedBy="tagsOfArtist")
	private List<Artist> artistsOfTag= new ArrayList<>();
	
	@JsonView(Tags.class)
	@ManyToMany(mappedBy="tagsOfPlaylist")
	private List<Playlist> playlistsOfTag= new ArrayList<>();

	public Tag(String name) {
		super();
		this.name = name;
		numberTag=0;
	}

	public Tag() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Artist> getArtistsOfTag() {
		return artistsOfTag;
	}

	//entidad principal->Artist
	public void addArtistOfTag(Artist artistOfTag) {
		this.artistsOfTag.add(artistOfTag);
	}

	public List<Playlist> getPlaylistsOfTag() {
		return playlistsOfTag;
	}

	//entidad principal->Playlist
	public void addPlaylistOfTag(Playlist playlistOfTag) {
		this.playlistsOfTag.add(playlistOfTag);
	}

	public long getNumberTag() {
		return numberTag;
	}

	public void incNumberTag() {
		this.numberTag =this.numberTag+1;
	}
	
	public void decNumberTag() {
		this.numberTag =this.numberTag-1;
	}
	
}
