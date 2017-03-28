package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.classes.Tag;
import com.example.repositories.TagRepository;

@Service
public class TagService{
	
	@Autowired
	TagRepository tagRepository;
	
	public Tag findOne(long id) {
		return tagRepository.findOne(id);
	}
	
	public List<Tag> findAll() {
		return tagRepository.findAll();
	}
	
	public void save(Tag tag) {
		tagRepository.save(tag);
	}
	
	public void delete(long id) {
		tagRepository.delete(id);
	}
	
	public List<Tag> findFirst3ByOrderByNumberTagDesc(){
		return tagRepository.findFirst3ByOrderByNumberTagDesc();
	}
	
}