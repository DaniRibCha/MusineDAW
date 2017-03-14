package com.example;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PlaylistRepository extends JpaRepository<Playlist, Long>  {
	
	List<Playlist> findByTitle(String title);
	
	List <Playlist> findFirst3ByOrderByNLikesDesc();
	
	List<Playlist> findByTagsOfPlaylist(List<Tag> tags);
}
