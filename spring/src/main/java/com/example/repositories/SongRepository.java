package com.example.repositories;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.User;

public interface SongRepository extends JpaRepository<Song, Long> {

	List<Song> findByTitle(String title);
	Page<Song> findAll(Pageable page);
	Page<Song> findByUsersFavoriteSong(List<User> users, Pageable page);
	List<Song> findByUsersFavoriteSong(List<User> users);
	Page<Song> findByPlaylistsOfSong(List<Playlist> playlist, Pageable page);
	Page<Song> findByArtistsOfSong(List<Artist> artists,Pageable page);
	Song findByArtistsOfSongAndTitle(List<Artist> artists,String title);
}