package com.example;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
	
	@Autowired
	private SongRepository songRepository;
	
	@Autowired
	private ArtistRepository artistRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PlaylistRepository playlistRepository;
	
	@Autowired
	private TagRepository tagRepository;
	
	@Autowired
	private UserComponent userComponent;
	
	@PostConstruct
	public void init(){
		
		//prueba Artistas-Canciones
				Artist a1=new Artist("ChainSmokers","USA");
				Artist a2=new Artist("Halsey","USA");
				Artist a3=new Artist("Luis Fonsi","Puerto Rico");
				Artist a4=new Artist("Ed Sheeran", "U.K.");
				Artist a5=new Artist("Dave Moisan", "USA");
				Artist a6=new Artist("Coldplay", "USA");
				Artist a7=new Artist("Panic! At The Disco", "USA");
				Artist a8=new Artist("Fall Out Boy", "USA");
				Artist a9=new Artist("Maroon 5", "USA");
				Artist a10=new Artist("Charlie Puth", "USA");
				Artist a11=new Artist("Selena Gomez", "USA");
				Artist a12=new Artist("Twenty One Pilots", "USA");
				Artist a13=new Artist("Chino y Nacho", "Venezuela");
				Artist a14=new Artist("Tyler Ward", "USA");
				Artist a15=new Artist("Shakira", "Colombia");
				Artist a16=new Artist("The Script", "Ireland");
				Artist a17=new Artist("Elvis Presley", "USA");
				Artist a18=new Artist("Nickelback", "USA");
				Artist a19=new Artist("Carlos Vives", "Colombia");
				Artist a20=new Artist("Lukas Graham", "USA");
				Artist a21=new Artist("David Bisbal", "España");
				Artist a22=new Artist("Dvicio", "España");
				Artist a23=new Artist("Daughtry", "USA");
				
				
				artistRepository.save(a1);
				artistRepository.save(a2);
				artistRepository.save(a3);
				artistRepository.save(a4);
				artistRepository.save(a5);
				artistRepository.save(a6);
				artistRepository.save(a7);
				artistRepository.save(a8);
				artistRepository.save(a9);
				artistRepository.save(a10);
				artistRepository.save(a11);
				artistRepository.save(a12);
				artistRepository.save(a13);
				artistRepository.save(a14);
				artistRepository.save(a15);
				artistRepository.save(a16);
				artistRepository.save(a17);
				artistRepository.save(a18);
				artistRepository.save(a19);
				artistRepository.save(a20);
				artistRepository.save(a21);
				artistRepository.save(a22);
				artistRepository.save(a23);
				
				Song s1=new Song("closer","https://www.youtube.com/watch?v=RvK8SKZbBWg");
				s1.addArtistsOfSong(a1);
				s1.addArtistsOfSong(a2);
				
				Song s2=new Song("despacito","https://www.youtube.com/watch?v=kJQP7kiw5Fk");
				s2.addArtistsOfSong(a3);
				
				Song s3=new Song("new man","https://www.youtube.com/watch?v=EwzD8U4u76k");
				s3.addArtistsOfSong(a4);
				
				Song s4=new Song("mexico","https://www.youtube.com/watch?v=rg1aIYhgexU");
				s4.addArtistsOfSong(a5);
				
				Song s5=new Song("control","https://www.youtube.com/watch?v=so8V5dAli-Q");
				s5.addArtistsOfSong(a2);
				
				Song s6=new Song("something just lie this","https://www.youtube.com/watch?v=FM7MFYoylVs");
				s6.addArtistsOfSong(a1);
				s6.addArtistsOfSong(a6);
				
				Song s7=new Song("death of a bachelor","https://www.youtube.com/watch?v=R03cqGg40GU");
				s7.addArtistsOfSong(a7);
				
				Song s8=new Song("immortals","https://www.youtube.com/watch?v=l9PxOanFjxQ");
				s8.addArtistsOfSong(a8);
				
				Song s9=new Song("dance, dance","https://www.youtube.com/watch?v=C6MOKXm8x50");
				s9.addArtistsOfSong(a8);
				
				Song s10=new Song("don't wanna know","https://www.youtube.com/watch?v=ANS9sSJA9Yc");
				s10.addArtistsOfSong(a9);
				
				Song s11=new Song("we don't talk anymore","https://www.youtube.com/watch?v=3AtDnEC4zak");
				s11.addArtistsOfSong(a10);
				s11.addArtistsOfSong(a11);
				
				Song s12=new Song("the heart wants what it wants","https://www.youtube.com/watch?v=ij_0p_6qTss");
				s12.addArtistsOfSong(a11);
				
				Song s13=new Song("sugar","https://www.youtube.com/watch?v=09R8_2nJtjg");
				s13.addArtistsOfSong(a9);
				
				Song s14=new Song("galway girl","https://www.youtube.com/watch?v=gL-WVjvzu34");
				s14.addArtistsOfSong(a4);
				
				Song s15=new Song("corazon en la maleta","https://www.youtube.com/watch?v=oX0jcZQ16ew");
				s15.addArtistsOfSong(a3);
				
				Song s16=new Song("hymn for the weekend","https://www.youtube.com/watch?v=YykjpeuMNEk");
				s16.addArtistsOfSong(a6);
				
				Song s17=new Song("dangerously","https://www.youtube.com/watch?v=TBXQu8ORnBQ");
				s17.addArtistsOfSong(a10);
				
				Song s18=new Song("don't wanna know","https://www.youtube.com/watch?v=ANS9sSJA9Yc&spfreload=10");
				s18.addArtistsOfSong(a9);
				
				Song s19=new Song("stressed out","https://www.youtube.com/watch?v=pXRviuL6vMY");
				s19.addArtistsOfSong(a12);
				
				Song s20=new Song("my songs know what you did in the dark","https://www.youtube.com/watch?v=LkIWmsP3c_s");
				s20.addArtistsOfSong(a8);
				
				Song s21=new Song("kill em with kindness","https://www.youtube.com/watch?v=HHP5MKgK0o8");
				s21.addArtistsOfSong(a11);
				
				Song s22=new Song("grave","https://www.youtube.com/watch?v=zxVzHBcwzL0");
				s22.addArtistsOfSong(a5);
				
				Song s23=new Song("i write sins not tragedies","https://www.youtube.com/watch?v=vc6vs-l5dkc");
				s23.addArtistsOfSong(a7);
				
				songRepository.save(s1);
				songRepository.save(s2);
				songRepository.save(s3);
				songRepository.save(s4);
				songRepository.save(s5);
				songRepository.save(s6);
				songRepository.save(s7);
				songRepository.save(s8);
				songRepository.save(s9);
				songRepository.save(s10);
				songRepository.save(s11);
				songRepository.save(s12);
				songRepository.save(s13);
				songRepository.save(s14);
				songRepository.save(s15);
				songRepository.save(s16);
				songRepository.save(s17);
				songRepository.save(s18);
				songRepository.save(s19);
				songRepository.save(s20);
				songRepository.save(s21);
				songRepository.save(s22);
				songRepository.save(s23);
				//fin Artista-Canciones
				
		
		//Users
		User admin=new User("admin", "","adminpass","admin@gmail.com","ROLE_USER","ROLE_ADMIN");
		userRepository.save(admin);
				
		User u1=new User("Davide", "Italy","pass","davide@gmail.com","ROLE_USER");
		User u2=new User("Dani","Spain","pass","dani@gmail.com","ROLE_USER");
		User u3=new User("Ruben","Spain","pass","ruben@gmail.com");
		User u4=new User("Stephanie","Venezuela","pass","stephanie@gmail.com","ROLE_USER");
		User u5=new User("Carlos","Mexico","pass","carlos@gmail.com","ROLE_USER");
		User u6=new User("Patricia","Republica Dominicana","pass","patricia@gmail.com","ROLE_USER");
		User u7=new User("Peter","USA","pass","peter@gmail.com","ROLE_USER");
		User u8=new User("Manuel","Colombia","pass","manuel@gmail.com","ROLE_USER");
		User u9=new User("Elizabeth","U.K.","pass","elizabeth@gmail.com","ROLE_USER");
		User u10=new User("Ingrid","Mexico","pass","ingrid@gmail.com","ROLE_USER");
		User u11=new User("Paul","Ecuador","pass","paul@gmail.com","ROLE_USER");
		User u12=new User("Luis","Argentina","pass","luis@gmail.com","ROLE_USER");
		User u13=new User("Liam","Australia","pass","liam@gmail.com","ROLE_USER");
		User u14=new User("Felix","Chile","pass","felix@gmail.com","ROLE_USER");
		User u15=new User("Laura","Bolivia","pass","laura@gmail.com","ROLE_USER");
		User u16=new User("Gabriela","Panama","pass","gabriela@gmail.com","ROLE_USER");
		User u17=new User("Sofia","Cuba","pass","sofia@gmail.com","ROLE_USER");
		User u18=new User("Michelle","Francia","pass","michelle@gmail.com","ROLE_USER");
		User u19=new User("David","Peru","pass","david@gmail.com","ROLE_USER");
		User u20=new User("Alejandro","Puerto Rico","pass","alejandro@gmail.com","ROLE_USER");
		User u21=new User("Pablo","Mexico","pass","pablo@gmail.com","ROLE_USER");
		User u22=new User("Bob","Jamaica","pass","bob@gmail.com","ROLE_USER");
		User u23=new User("Maria","Belice","pass","maria@gmail.com","ROLE_USER");
		User u24=new User("Juan","Venezuela","pass","juan@gmail.com","ROLE_USER");
		
		//prueba User-Canciones favoritas
		u1.addFavoriteSong(s1);
		u4.addFavoriteSong(s1);
		u4.addFavoriteSong(s2);
		u4.addFavoriteSong(s3);
		u4.addFavoriteSong(s4);
		u4.addFavoriteSong(s5);
		u4.addFavoriteSong(s6);
		u4.addFavoriteSong(s7);
		u4.addFavoriteSong(s8);
		u4.addFavoriteSong(s9);
		u4.addFavoriteSong(s10);
		u4.addFavoriteSong(s11);
		u4.addFavoriteSong(s12);
		u4.addFavoriteSong(s13);
		u4.addFavoriteSong(s14);
		u4.addFavoriteSong(s15);
		u4.addFavoriteSong(s16);
		u4.addFavoriteSong(s17);
		u4.addFavoriteSong(s18);
		u4.addFavoriteSong(s19);
		u4.addFavoriteSong(s20);
		u4.addFavoriteSong(s21);
		u4.addFavoriteSong(s22);
		u4.addFavoriteSong(s23);
		
		userRepository.save(u1);userRepository.save(u2);
		userRepository.save(u3);userRepository.save(u4);
		userRepository.save(u5);userRepository.save(u6);
		userRepository.save(u7);userRepository.save(u8);
		userRepository.save(u9);userRepository.save(u10);
		userRepository.save(u11);userRepository.save(u12);
		userRepository.save(u13);userRepository.save(u14);
		userRepository.save(u15);userRepository.save(u16);
		userRepository.save(u17);userRepository.save(u18);
		userRepository.save(u19);userRepository.save(u20);
		userRepository.save(u21);userRepository.save(u22);
		userRepository.save(u23);userRepository.save(u24);
		
		
		//following de Davide
		u1.addFollowing(u2);
		u1.addFollowing(u4);
				//fin User-Canciones favoritas
		
		
		//prueba Artistas-Seguidores,Tags
		Tag t1=new Tag("Pop"); Tag t2=new Tag("2016");
		tagRepository.save(t1); tagRepository.save(t2); 
		Tag t3=new Tag("2015"); Tag t4=new Tag("Latino");
		tagRepository.save(t3); tagRepository.save(t4); 
		
		a1.addFollowerOfArtist(u1); a1.addFollowerOfArtist(u2);
		a1.addTagOfArtist(t1); a1.addTagOfArtist(t2);
		a4.addTagOfArtist(t1); a4.addTagOfArtist(t2);
		tagRepository.save(t1);tagRepository.save(t2);
		artistRepository.save(a1);artistRepository.save(a4);
		//fin Artistas-Seguidores,Tags

		
		//prueba Usuarios-Playlists creadas
		Playlist pCreated1=new Playlist("myPlaylistCreated1",u2.getName(),u2.getId_user());
		pCreated1.addTagOfPlaylist(t1);
		pCreated1.addSongOfPlaylist(s1);
		pCreated1.setDate(new java.sql.Date(20,12,31));
		tagRepository.save(t1);
		
		Playlist pCreated2=new Playlist("myPlaylistCreated2",u2.getName(),u2.getId_user());
		pCreated2.addTagOfPlaylist(t2);
		pCreated2.addSongOfPlaylist(s2);
		pCreated2.addSongOfPlaylist(s1);
		pCreated2.addSongOfPlaylist(s3);
		pCreated2.addSongOfPlaylist(s4);
		pCreated2.addSongOfPlaylist(s5);
		pCreated2.addSongOfPlaylist(s6);
		pCreated2.addSongOfPlaylist(s7);
		pCreated2.addSongOfPlaylist(s8);
		pCreated2.addSongOfPlaylist(s9);
		pCreated2.addSongOfPlaylist(s10);
		pCreated2.addSongOfPlaylist(s11);
		pCreated2.addSongOfPlaylist(s12);
		pCreated2.addSongOfPlaylist(s13);
		pCreated2.addSongOfPlaylist(s14);
		pCreated2.addSongOfPlaylist(s15);
		pCreated2.addSongOfPlaylist(s16);
		pCreated2.addSongOfPlaylist(s17);
		pCreated2.addSongOfPlaylist(s18);
		pCreated2.addSongOfPlaylist(s19);
		pCreated2.addSongOfPlaylist(s20);
		pCreated2.addSongOfPlaylist(s21);
		pCreated2.addSongOfPlaylist(s22);
		pCreated2.addSongOfPlaylist(s23);
		pCreated2.setDate(new java.sql.Date(20,12,31));
		tagRepository.save(t2);
		
		Playlist pCreated3=new Playlist("myPlaylistCreated3",u3.getName(),u3.getId_user());
		pCreated3.addTagOfPlaylist(t1);
		pCreated3.addSongOfPlaylist(s1);
		tagRepository.save(t1);
		
		Playlist pCreated4=new Playlist("myPlaylistCreated4",u4.getName(),u4.getId_user());
		pCreated4.addTagOfPlaylist(t1);pCreated4.addTagOfPlaylist(t4);
		pCreated4.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated5=new Playlist("myPlaylistCreated5",u3.getName(),u3.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated6=new Playlist("myPlaylistCreated5",u13.getName(),u13.getId_user());
		pCreated5.addTagOfPlaylist(t2);pCreated5.addTagOfPlaylist(t3);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t2);tagRepository.save(t3);
		
		Playlist pCreated7=new Playlist("myPlaylistCreated5",u6.getName(),u6.getId_user());
		pCreated5.addTagOfPlaylist(t1);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);
		
		Playlist pCreated8=new Playlist("myPlaylistCreated5",u15.getName(),u15.getId_user());
		pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t4);
		
		Playlist pCreated9=new Playlist("myPlaylistCreated5",u20.getName(),u20.getId_user());
		pCreated5.addTagOfPlaylist(t2);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t2);tagRepository.save(t4);
		
		Playlist pCreated10=new Playlist("myPlaylistCreated5",u19.getName(),u19.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated11=new Playlist("myPlaylistCreated5",u23.getName(),u23.getId_user());
		pCreated5.addTagOfPlaylist(t3);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t3);
		
		Playlist pCreated12=new Playlist("myPlaylistCreated5",u17.getName(),u17.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated13=new Playlist("myPlaylistCreated5",u6.getName(),u6.getId_user());
		pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t4);
		
		Playlist pCreated14=new Playlist("myPlaylistCreated5",u3.getName(),u3.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated15=new Playlist("myPlaylistCreated5",u12.getName(),u12.getId_user());
		pCreated5.addTagOfPlaylist(t1);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);
		
		Playlist pCreated16=new Playlist("myPlaylistCreated5",u8.getName(),u8.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated17=new Playlist("myPlaylistCreated5",u18.getName(),u18.getId_user());
		pCreated5.addTagOfPlaylist(t1);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);
		
		Playlist pCreated18=new Playlist("myPlaylistCreated5",u5.getName(),u5.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated19=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);
		
		Playlist pCreated20=new Playlist("myPlaylistCreated5",u3.getName(),u3.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated21=new Playlist("myPlaylistCreated5",u23.getName(),u23.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated22=new Playlist("myPlaylistCreated5",u4.getName(),u4.getId_user());
		pCreated5.addTagOfPlaylist(t3);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t3);
		
		Playlist pCreated23=new Playlist("myPlaylistCreated5",u17.getName(),u17.getId_user());
		pCreated5.addTagOfPlaylist(t3);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t3);tagRepository.save(t4);
		
		Playlist pCreated24=new Playlist("myPlaylistCreated5",u7.getName(),u7.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated25=new Playlist("myPlaylistCreated5",u3.getName(),u3.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		//Playlist especificamente para probar la paginacion con Dani
		
		Playlist pCreated26=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated27=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);

		Playlist pCreated28=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated29=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated30=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated31=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated32=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated33=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated34=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated35=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated36=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated37=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated38=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated39=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated40=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated41=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated42=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated43=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated44=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated45=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated46=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated47=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated48=new Playlist("myPlaylistCreated5",u2.getName(),u2.getId_user());
		pCreated5.addTagOfPlaylist(t1);pCreated5.addTagOfPlaylist(t4);
		pCreated5.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		u2.addCreatedPlaylist(pCreated1);
		u2.addCreatedPlaylist(pCreated2);
		u2.addCreatedPlaylist(pCreated26);
		u2.addCreatedPlaylist(pCreated27);
		u2.addCreatedPlaylist(pCreated28);
		u2.addCreatedPlaylist(pCreated29);
		u2.addCreatedPlaylist(pCreated30);
		u2.addCreatedPlaylist(pCreated31);
		u2.addCreatedPlaylist(pCreated32);
		u2.addCreatedPlaylist(pCreated33);
		u2.addCreatedPlaylist(pCreated34);
		u2.addCreatedPlaylist(pCreated35);
		u2.addCreatedPlaylist(pCreated36);
		u2.addCreatedPlaylist(pCreated37);
		u2.addCreatedPlaylist(pCreated38);
		u2.addCreatedPlaylist(pCreated39);
		u2.addCreatedPlaylist(pCreated40);
		u2.addCreatedPlaylist(pCreated41);
		u2.addCreatedPlaylist(pCreated42);
		u2.addCreatedPlaylist(pCreated43);
		u2.addCreatedPlaylist(pCreated44);
		u2.addCreatedPlaylist(pCreated45);
		u2.addCreatedPlaylist(pCreated46);
		u2.addCreatedPlaylist(pCreated47);
		u2.addCreatedPlaylist(pCreated48);
		u3.addCreatedPlaylist(pCreated3);
		u4.addCreatedPlaylist(pCreated4);
		u5.addCreatedPlaylist(pCreated5);
		// fin Usuarios-Playlists creadas
		
		//prueba Usuarios-Playlists gustadas
		pCreated1.addUserlikeOfPlaylist(u3);
		pCreated1.addUserlikeOfPlaylist(u2);
		pCreated2.addUserlikeOfPlaylist(u2);
		pCreated3.addUserlikeOfPlaylist(u2);
		pCreated4.addUserlikeOfPlaylist(u2);
		pCreated5.addUserlikeOfPlaylist(u2);
		pCreated6.addUserlikeOfPlaylist(u2);
		pCreated7.addUserlikeOfPlaylist(u2);
		pCreated8.addUserlikeOfPlaylist(u2);
		pCreated9.addUserlikeOfPlaylist(u2);
		pCreated10.addUserlikeOfPlaylist(u2);
		pCreated11.addUserlikeOfPlaylist(u2);
		pCreated12.addUserlikeOfPlaylist(u2);
		pCreated13.addUserlikeOfPlaylist(u2);
		pCreated15.addUserlikeOfPlaylist(u2);
		pCreated16.addUserlikeOfPlaylist(u2);
		pCreated17.addUserlikeOfPlaylist(u2);
		pCreated18.addUserlikeOfPlaylist(u2);
		pCreated19.addUserlikeOfPlaylist(u2);
		pCreated20.addUserlikeOfPlaylist(u2);
		pCreated21.addUserlikeOfPlaylist(u2);
		pCreated22.addUserlikeOfPlaylist(u2);
		pCreated23.addUserlikeOfPlaylist(u2);
		pCreated24.addUserlikeOfPlaylist(u2);
		pCreated25.addUserlikeOfPlaylist(u2);
		playlistRepository.save(pCreated1); 
		playlistRepository.save(pCreated2);
		playlistRepository.save(pCreated3);
		playlistRepository.save(pCreated4);
		playlistRepository.save(pCreated5);
		playlistRepository.save(pCreated6);
		playlistRepository.save(pCreated7);
		playlistRepository.save(pCreated8);
		playlistRepository.save(pCreated9);
		playlistRepository.save(pCreated10);
		playlistRepository.save(pCreated11);
		playlistRepository.save(pCreated12);
		playlistRepository.save(pCreated13);
		playlistRepository.save(pCreated14);
		playlistRepository.save(pCreated15);
		playlistRepository.save(pCreated16);
		playlistRepository.save(pCreated17);
		playlistRepository.save(pCreated18);
		playlistRepository.save(pCreated19);
		playlistRepository.save(pCreated20);
		playlistRepository.save(pCreated21);
		playlistRepository.save(pCreated22);
		playlistRepository.save(pCreated23);
		playlistRepository.save(pCreated24);
		playlistRepository.save(pCreated25);
		//fin Usuarios-Playlists gustadas
		
		//followers davide
		u5.addFollowing(u1);
		userRepository.save(u5);
		u7.addFollowing(u1);
		userRepository.save(u7);
		u16.addFollowing(u1);
		userRepository.save(u16);
		u2.addFollowing(u1);
		userRepository.save(u2);
		u10.addFollowing(u1);
		userRepository.save(u10);
		u11.addFollowing(u1);
		userRepository.save(u11);
		u22.addFollowing(u1);
		userRepository.save(u22);
		u20.addFollowing(u1);
		userRepository.save(u20);
		u15.addFollowing(u1);
		userRepository.save(u15);
		u18.addFollowing(u1);
		userRepository.save(u18);
		u23.addFollowing(u1);
		userRepository.save(u23);
		u8.addFollowing(u1);
		userRepository.save(u8);
		u9.addFollowing(u1);
		userRepository.save(u9);
		u6.addFollowing(u1);
		userRepository.save(u6);
		u13.addFollowing(u1);
		userRepository.save(u13);
		u14.addFollowing(u1);
		userRepository.save(u14);
		u19.addFollowing(u1);
		userRepository.save(u19);
		u12.addFollowing(u1);
		userRepository.save(u12);
		u3.addFollowing(u1);
		userRepository.save(u3);
		u21.addFollowing(u1);
		userRepository.save(u21);
		
		
		u4.addFollowing(u1);
		u4.addFollowing(u2);
		u4.addFollowing(u3);
		u4.addFollowing(u5);
		u4.addFollowing(u6);
		u4.addFollowing(u7);
		u4.addFollowing(u8);
		u4.addFollowing(u9);
		u4.addFollowing(u10);
		u4.addFollowing(u11);
		u4.addFollowing(u12);
		u4.addFollowing(u13);
		u4.addFollowing(u14);
		u4.addFollowing(u15);
		u4.addFollowing(u16);
		u4.addFollowing(u17);
		u4.addFollowing(u18);
		u4.addFollowing(u19);
		u4.addFollowing(u20);
		u4.addFollowing(u21);
		u4.addFollowing(u22);
		u4.addFollowing(u23);
		
		userRepository.save(u4);	
	}
}
