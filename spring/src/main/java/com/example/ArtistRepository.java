package com.example;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface ArtistRepository extends JpaRepository<Artist, Long>{
	
	List<Artist> findByName(String name);
	
}
