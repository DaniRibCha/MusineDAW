package com.example;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonView;

import java.util.List;

@Entity
public class Follow {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	
	private long id_following;
	
	private long id_followed;
	
public Follow(){
	
	
}

public long getId_userfollowing() {
	return id_following;
}

public void setId_userfollowing(long id_following) {
	this.id_following = id_following;
}

public long getId_userfollowed() {
	return id_followed;
}

public void setId_userfollowed(long id_userfollowed) {
	this.id_followed = id_userfollowed;
}	


}