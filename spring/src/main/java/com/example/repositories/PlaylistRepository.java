package com.example.repositories;

import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.classes.Playlist;
import com.example.classes.Tag;
import com.example.classes.User;

public interface PlaylistRepository extends JpaRepository<Playlist, Long>  {
	
	List<Playlist> findByTitle(String title);
	List<Playlist> findByOrderByNLikesDesc();
	Page <Playlist> findFirst100ByOrderByDateAsc(Pageable page);
	List<Playlist> findByTagsOfPlaylist(List<Tag> tags);
	
	Page<Playlist> findByUserlikesOfPlaylist(List<User> user, Pageable page);
	
	Page<Playlist> findByCreatorId(long id, Pageable page);
	
	List<Playlist> findByCreatorId(long id);
}
