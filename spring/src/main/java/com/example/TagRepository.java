package com.example;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TagRepository extends JpaRepository<Tag, Long>  {
	
	Tag findByName(String name);
	
	List <Tag> findFirst3ByOrderByNumberTagDesc();
	
}
