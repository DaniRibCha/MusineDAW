package com.example;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PlaylistRepository extends JpaRepository<Playlist, Long>  {
	
	List<Playlist> findByTitle(String title);
	
	List <Playlist> findFirst3ByOrderByNLikesDesc();
	
//	@Query(value = "SELECT * FROM playlist p, playlist_tags_of_playlist pt, tag t where p.id_playlist = t.playlist_id_playlist and t.id_tag = ?1", nativeQuery = true)
//	List <Playlist> findByTag(String name);
	
//	@Query(value = "SELECT p FROM playlist p, playlist_tagsOfPlaylist pt WHERE p.id_playlist=pt.id_playlist AND pt.id_tag=?1)")
//	List <Playlist> findByTagId(String id);
}
