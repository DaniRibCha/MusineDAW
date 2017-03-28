package com.example.controllers;
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

import com.example.classes.Artist;
import com.example.classes.Playlist;
import com.example.classes.Song;
import com.example.classes.Tag;
import com.example.classes.User;
import com.example.repositories.ArtistRepository;
import com.example.repositories.PlaylistRepository;
import com.example.repositories.SongRepository;
import com.example.repositories.TagRepository;
import com.example.repositories.UserRepository;
import com.example.security.UserComponent;

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
				
				Song s24=new Song("galway girl","https://www.youtube.com/watch?v=gL-WVjvzu34");
				s24.addArtistsOfSong(a4);
				
				Song s25=new Song("shape of you","https://www.youtube.com/watch?v=JGwWNGJdvx8");
				s25.addArtistsOfSong(a4);
				
				Song s26=new Song("castle on the hill","https://www.youtube.com/watch?v=K0ibBPhiaG0");
				s26.addArtistsOfSong(a4);
				
				Song s27=new Song("perfect","https://www.youtube.com/watch?v=1UQzJfsT2eo");
				s27.addArtistsOfSong(a4);
				
				Song s28=new Song("eraser","https://www.youtube.com/watch?v=OjGrcJ4lZCc");
				s28.addArtistsOfSong(a4);
				
				Song s29=new Song("happier","https://www.youtube.com/watch?v=8TpcBDJZsJA");
				s29.addArtistsOfSong(a4);
				
				Song s30=new Song("barcelona","https://www.youtube.com/watch?v=OVO4LhrOFiY");
				s30.addArtistsOfSong(a4);
				
				Song s31=new Song("you need me, i don´t need you","https://www.youtube.com/watch?v=ZXvzzTICvJs");
				s31.addArtistsOfSong(a4);
				
				Song s32=new Song("one night","https://www.youtube.com/watch?v=ZaOrcB5qQhw");
				s32.addArtistsOfSong(a4);
				
				Song s33=new Song("the a team","https://www.youtube.com/watch?v=UAWcs5H-qgQ");
				s33.addArtistsOfSong(a4);
				
				Song s34=new Song("give me love","https://www.youtube.com/watch?v=FOjdXSrtUxA");
				s34.addArtistsOfSong(a4);
				
				Song s35=new Song("lego house","https://www.youtube.com/watch?v=c4BLVznuWnU");
				s35.addArtistsOfSong(a4);
				
				Song s36=new Song("drunk","https://www.youtube.com/watch?v=G2fOum_KWQU");
				s36.addArtistsOfSong(a4);
				
				Song s37=new Song("small bump","https://www.youtube.com/watch?v=A_af256mnTE");
				s37.addArtistsOfSong(a4);
				
				Song s38=new Song("photograph","https://www.youtube.com/watch?v=nSDgHBxUbVQ");
				s38.addArtistsOfSong(a4);
				
				Song s39=new Song("thinking out loud","https://www.youtube.com/watch?v=lp-EO5I60KA");
				s39.addArtistsOfSong(a4);
				
				Song s40=new Song("don´t","https://www.youtube.com/watch?v=iD2rhdFRehU");
				s40.addArtistsOfSong(a4);
				
				Song s41=new Song("afire love","https://www.youtube.com/watch?v=JznXx1Ns374");
				s41.addArtistsOfSong(a4);
				
				Song s42=new Song("save myself","https://www.youtube.com/watch?v=qXM0JdAwabU");
				s42.addArtistsOfSong(a4);
				
				Song s43=new Song("dive","https://www.youtube.com/watch?v=Wv2rLZmbPMA");
				s43.addArtistsOfSong(a4);
				
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
				songRepository.save(s24);
				songRepository.save(s25);
				songRepository.save(s26);
				songRepository.save(s27);
				songRepository.save(s28);
				songRepository.save(s29);
				songRepository.save(s30);
				songRepository.save(s31);
				songRepository.save(s32);
				songRepository.save(s33);
				songRepository.save(s34);
				songRepository.save(s35);
				songRepository.save(s36);
				songRepository.save(s37);
				songRepository.save(s38);
				songRepository.save(s39);
				songRepository.save(s40);
				songRepository.save(s41);
				songRepository.save(s42);
				songRepository.save(s43);
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
		
		a4.addFollowerOfArtist(u1); a4.addFollowerOfArtist(u2);
		a4.addFollowerOfArtist(u3); a4.addFollowerOfArtist(u4);
		a4.addFollowerOfArtist(u5); a4.addFollowerOfArtist(u6);
		a4.addFollowerOfArtist(u7); a4.addFollowerOfArtist(u8);
		a4.addFollowerOfArtist(u9); a4.addFollowerOfArtist(u10);
		a4.addFollowerOfArtist(u11); a4.addFollowerOfArtist(u12);
		a4.addFollowerOfArtist(u13); a4.addFollowerOfArtist(u14);
		a4.addFollowerOfArtist(u15); a4.addFollowerOfArtist(u16);
		a4.addFollowerOfArtist(u17); a4.addFollowerOfArtist(u18);
		a4.addFollowerOfArtist(u19); a4.addFollowerOfArtist(u20);
		a4.addFollowerOfArtist(u21); a4.addFollowerOfArtist(u22);
		a4.addFollowerOfArtist(u23); a4.addFollowerOfArtist(u24);
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
		
		Playlist pCreated6=new Playlist("myPlaylistCreated6",u13.getName(),u13.getId_user());
		pCreated6.addTagOfPlaylist(t2);pCreated6.addTagOfPlaylist(t3);
		pCreated6.addSongOfPlaylist(s2);
		tagRepository.save(t2);tagRepository.save(t3);
		
		Playlist pCreated7=new Playlist("myPlaylistCreated7",u6.getName(),u6.getId_user());
		pCreated7.addTagOfPlaylist(t1);
		pCreated7.addSongOfPlaylist(s2);
		tagRepository.save(t1);
		
		Playlist pCreated8=new Playlist("myPlaylistCreated8",u15.getName(),u15.getId_user());
		pCreated8.addTagOfPlaylist(t4);
		pCreated8.addSongOfPlaylist(s2);
		tagRepository.save(t4);
		
		Playlist pCreated9=new Playlist("myPlaylistCreated9",u20.getName(),u20.getId_user());
		pCreated9.addTagOfPlaylist(t2);pCreated9.addTagOfPlaylist(t4);
		pCreated9.addSongOfPlaylist(s2);
		tagRepository.save(t2);tagRepository.save(t4);
		
		Playlist pCreated10=new Playlist("myPlaylistCreated10",u19.getName(),u19.getId_user());
		pCreated10.addTagOfPlaylist(t1);pCreated10.addTagOfPlaylist(t4);
		pCreated10.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated11=new Playlist("myPlaylistCreated11",u23.getName(),u23.getId_user());
		pCreated11.addTagOfPlaylist(t3);
		pCreated11.addSongOfPlaylist(s2);
		tagRepository.save(t3);
		
		Playlist pCreated12=new Playlist("myPlaylistCreated12",u17.getName(),u17.getId_user());
		pCreated12.addTagOfPlaylist(t1);pCreated12.addTagOfPlaylist(t4);
		pCreated12.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated13=new Playlist("myPlaylistCreated13",u6.getName(),u6.getId_user());
		pCreated13.addTagOfPlaylist(t4);
		pCreated13.addSongOfPlaylist(s2);
		tagRepository.save(t4);
		
		Playlist pCreated14=new Playlist("myPlaylistCreated14",u3.getName(),u3.getId_user());
		pCreated14.addTagOfPlaylist(t1);pCreated14.addTagOfPlaylist(t4);
		pCreated14.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated15=new Playlist("myPlaylistCreated15",u12.getName(),u12.getId_user());
		pCreated15.addTagOfPlaylist(t1);
		pCreated15.addSongOfPlaylist(s2);
		tagRepository.save(t1);
		
		Playlist pCreated16=new Playlist("myPlaylistCreated16",u8.getName(),u8.getId_user());
		pCreated16.addTagOfPlaylist(t1);pCreated16.addTagOfPlaylist(t4);
		pCreated16.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated17=new Playlist("myPlaylistCreated17",u18.getName(),u18.getId_user());
		pCreated17.addTagOfPlaylist(t1);
		pCreated17.addSongOfPlaylist(s2);
		tagRepository.save(t1);
		
		Playlist pCreated18=new Playlist("myPlaylistCreated18",u5.getName(),u5.getId_user());
		pCreated18.addTagOfPlaylist(t1);pCreated18.addTagOfPlaylist(t4);
		pCreated18.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated19=new Playlist("myPlaylistCreated19",u2.getName(),u2.getId_user());
		pCreated19.addTagOfPlaylist(t1);
		pCreated19.addSongOfPlaylist(s2);
		tagRepository.save(t1);
		
		Playlist pCreated20=new Playlist("myPlaylistCreated20",u3.getName(),u3.getId_user());
		pCreated20.addTagOfPlaylist(t1);pCreated20.addTagOfPlaylist(t4);
		pCreated20.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated21=new Playlist("myPlaylistCreated21",u23.getName(),u23.getId_user());
		pCreated21.addTagOfPlaylist(t1);pCreated21.addTagOfPlaylist(t4);
		pCreated21.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated22=new Playlist("myPlaylistCreated22",u4.getName(),u4.getId_user());
		pCreated22.addTagOfPlaylist(t3);
		pCreated22.addSongOfPlaylist(s2);
		tagRepository.save(t3);
		
		Playlist pCreated23=new Playlist("myPlaylistCreated23",u17.getName(),u17.getId_user());
		pCreated23.addTagOfPlaylist(t3);pCreated23.addTagOfPlaylist(t4);
		pCreated23.addSongOfPlaylist(s2);
		tagRepository.save(t3);tagRepository.save(t4);
		
		Playlist pCreated24=new Playlist("myPlaylistCreated24",u7.getName(),u7.getId_user());
		pCreated24.addTagOfPlaylist(t1);pCreated24.addTagOfPlaylist(t4);
		pCreated24.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated25=new Playlist("myPlaylistCreated25",u3.getName(),u3.getId_user());
		pCreated25.addTagOfPlaylist(t1);pCreated25.addTagOfPlaylist(t4);
		pCreated25.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		//Playlist especificamente para probar la paginacion con Dani
		
		Playlist pCreated26=new Playlist("myPlaylistCreated26",u2.getName(),u2.getId_user());
		pCreated26.addTagOfPlaylist(t1);pCreated26.addTagOfPlaylist(t4);
		pCreated26.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated27=new Playlist("myPlaylistCreated27",u2.getName(),u2.getId_user());
		pCreated27.addTagOfPlaylist(t1);pCreated27.addTagOfPlaylist(t4);
		pCreated27.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);

		Playlist pCreated28=new Playlist("myPlaylistCreated28",u2.getName(),u2.getId_user());
		pCreated28.addTagOfPlaylist(t1);pCreated28.addTagOfPlaylist(t4);
		pCreated28.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated29=new Playlist("myPlaylistCreated29",u2.getName(),u2.getId_user());
		pCreated29.addTagOfPlaylist(t1);pCreated29.addTagOfPlaylist(t4);
		pCreated29.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated30=new Playlist("myPlaylistCreated30",u2.getName(),u2.getId_user());
		pCreated30.addTagOfPlaylist(t1);pCreated30.addTagOfPlaylist(t4);
		pCreated30.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated31=new Playlist("myPlaylistCreated31",u2.getName(),u2.getId_user());
		pCreated31.addTagOfPlaylist(t1);pCreated31.addTagOfPlaylist(t4);
		pCreated31.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated32=new Playlist("myPlaylistCreated32",u2.getName(),u2.getId_user());
		pCreated32.addTagOfPlaylist(t1);pCreated32.addTagOfPlaylist(t4);
		pCreated32.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated33=new Playlist("myPlaylistCreated33",u2.getName(),u2.getId_user());
		pCreated33.addTagOfPlaylist(t1);pCreated33.addTagOfPlaylist(t4);
		pCreated33.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated34=new Playlist("myPlaylistCreated34",u2.getName(),u2.getId_user());
		pCreated34.addTagOfPlaylist(t1);pCreated34.addTagOfPlaylist(t4);
		pCreated34.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated35=new Playlist("myPlaylistCreated35",u2.getName(),u2.getId_user());
		pCreated35.addTagOfPlaylist(t1);pCreated35.addTagOfPlaylist(t4);
		pCreated35.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated36=new Playlist("myPlaylistCreated36",u2.getName(),u2.getId_user());
		pCreated36.addTagOfPlaylist(t1);pCreated36.addTagOfPlaylist(t4);
		pCreated36.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated37=new Playlist("myPlaylistCreated37",u2.getName(),u2.getId_user());
		pCreated37.addTagOfPlaylist(t1);pCreated37.addTagOfPlaylist(t4);
		pCreated37.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated38=new Playlist("myPlaylistCreated38",u2.getName(),u2.getId_user());
		pCreated38.addTagOfPlaylist(t1);pCreated38.addTagOfPlaylist(t4);
		pCreated38.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated39=new Playlist("myPlaylistCreated39",u2.getName(),u2.getId_user());
		pCreated39.addTagOfPlaylist(t1);pCreated39.addTagOfPlaylist(t4);
		pCreated39.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated40=new Playlist("myPlaylistCreated40",u2.getName(),u2.getId_user());
		pCreated40.addTagOfPlaylist(t1);pCreated40.addTagOfPlaylist(t4);
		pCreated40.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated41=new Playlist("myPlaylistCreated41",u2.getName(),u2.getId_user());
		pCreated41.addTagOfPlaylist(t1);pCreated41.addTagOfPlaylist(t4);
		pCreated41.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated42=new Playlist("myPlaylistCreated42",u2.getName(),u2.getId_user());
		pCreated42.addTagOfPlaylist(t1);pCreated42.addTagOfPlaylist(t4);
		pCreated42.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated43=new Playlist("myPlaylistCreated43",u2.getName(),u2.getId_user());
		pCreated43.addTagOfPlaylist(t1);pCreated43.addTagOfPlaylist(t4);
		pCreated43.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated44=new Playlist("myPlaylistCreated44",u2.getName(),u2.getId_user());
		pCreated44.addTagOfPlaylist(t1);pCreated44.addTagOfPlaylist(t4);
		pCreated44.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated45=new Playlist("myPlaylistCreated45",u2.getName(),u2.getId_user());
		pCreated45.addTagOfPlaylist(t1);pCreated45.addTagOfPlaylist(t4);
		pCreated45.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated46=new Playlist("myPlaylistCreated46",u2.getName(),u2.getId_user());
		pCreated46.addTagOfPlaylist(t1);pCreated46.addTagOfPlaylist(t4);
		pCreated46.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated47=new Playlist("myPlaylistCreated47",u2.getName(),u2.getId_user());
		pCreated47.addTagOfPlaylist(t1);pCreated47.addTagOfPlaylist(t4);
		pCreated47.addSongOfPlaylist(s2);
		tagRepository.save(t1);tagRepository.save(t4);
		
		Playlist pCreated48=new Playlist("myPlaylistCreated48",u2.getName(),u2.getId_user());
		pCreated48.addTagOfPlaylist(t1);pCreated48.addTagOfPlaylist(t4);
		pCreated48.addSongOfPlaylist(s2);
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
		//u4.addCreatedPlaylist(pCreated4);
		userRepository.save(u2);
		userRepository.save(u3);
		userRepository.save(u4);
		
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
		playlistRepository.save(pCreated26);
		playlistRepository.save(pCreated27);
		playlistRepository.save(pCreated28);
		playlistRepository.save(pCreated29);
		playlistRepository.save(pCreated30);
		playlistRepository.save(pCreated31);
		playlistRepository.save(pCreated32);
		playlistRepository.save(pCreated33);
		playlistRepository.save(pCreated34);
		playlistRepository.save(pCreated35);
		playlistRepository.save(pCreated36);
		playlistRepository.save(pCreated37);
		playlistRepository.save(pCreated38);
		playlistRepository.save(pCreated39);
		playlistRepository.save(pCreated40);
		playlistRepository.save(pCreated41);
		playlistRepository.save(pCreated42);
		playlistRepository.save(pCreated43);
		playlistRepository.save(pCreated44);
		playlistRepository.save(pCreated45);
		playlistRepository.save(pCreated46);
		playlistRepository.save(pCreated47);
		playlistRepository.save(pCreated48);
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
