package com.example;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PlaylistRepository extends JpaRepository<Playlist, Long>  {
	
	List<Playlist> findByTitle(String title);
	
//	@Query(value="SELECT * FROM PLAYLIST_TAGS_OF_PLAYLIST  WHERE TAGS_OF_PLAYLIST_ID_TAG=(SELECT ID_TAG FROM TAG WHERE NAME=?1)",nativeQuery=true)
//	List<Playlist> findByTagName(String name);
}
