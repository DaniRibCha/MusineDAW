package com.example;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByName(String name);
	
	Song findByFavoriteSongs(Song s);
	
	//Page<User> findFollowersByName(String name,Pageable Page);
	//Page<User> findFollowersByName(String name,Pageable Page);
	Page<User> findByFollowers(List<User> userFollowed,Pageable Page);
	
}
