package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.classes.Tag;

public interface TagRepository extends JpaRepository<Tag, Long>  {
	
	Tag findByName(String name);
	
	List <Tag> findFirst3ByOrderByNumberTagDesc();
	
}
