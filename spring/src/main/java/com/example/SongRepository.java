package com.example;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;



public interface SongRepository extends JpaRepository<Song, Long> {

	List<Song> findByTitle(String title);
	
	Page <Song> findAll(Pageable page);
}