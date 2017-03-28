package com.example.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.classes.Artist;


public interface ArtistRepository extends JpaRepository<Artist, Long>{
	
	Artist findByName(String name);
	
	List <Artist> findByOrderByFollowersDesc();
	
	
}
