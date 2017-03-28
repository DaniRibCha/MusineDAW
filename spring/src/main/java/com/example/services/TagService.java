package com.example.services;

import java.util.ArrayList;
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
	
	public Tag findByName(String name) {
		return tagRepository.findByName(name);
	}
	
	public List<Tag> findTop3ByOrderByNumberTagDesc(){
		List<Tag> topTags=new ArrayList<>();
		List<Tag> tagsTop=tagRepository.findByOrderByNumberTagDesc();
		for(int i=0;i<3;++i){
			topTags.add(tagsTop.get(i));
		}
		return topTags;
	}
	
}