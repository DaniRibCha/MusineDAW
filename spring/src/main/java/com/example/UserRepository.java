package com.example;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
	
	User findByName(String name);
	
	Song findByFavoriteSongs(Song s);
	
	Page<User> findByFollowers(Pageable Page);
	
}
