package com.example.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableGlobalMethodSecurity(securedEnabled = true)
@Order(1)
public class RestSecurityConfiguration extends WebSecurityConfigurerAdapter {
	
	@Autowired
	UserRepositoryAuthenticationProvider authenticationProvider;
	
 
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		//http.headers().frameOptions().disable();
		
		http.antMatcher("/api/**");
		
		// Public pages
		http.authorizeRequests().anyRequest().permitAll();
		/*http.authorizeRequests().antMatchers("/").permitAll();
		http.authorizeRequests().antMatchers("/api/logIn").permitAll();
		http.authorizeRequests().antMatchers("/api/Artist/{id}").permitAll();
		http.authorizeRequests().antMatchers("/api/Playlist/{id}").permitAll();
		http.authorizeRequests().antMatchers("/api/ArtistFollowers/{id}").permitAll();
		http.authorizeRequests().antMatchers("/api/ArtistSong/{id}").permitAll();
		http.authorizeRequests().antMatchers("/api/SearchPlaylist/{key}").permitAll();
		http.authorizeRequests().antMatchers("/api/ArtistListBasic").permitAll();
		http.authorizeRequests().antMatchers("/api/SearchPlaylist").permitAll();
		http.authorizeRequests().antMatchers("/api/UserPlaylists/{id}").permitAll();
		http.authorizeRequests().antMatchers("/api/SongListBasic").permitAll(); 
		http.authorizeRequests().antMatchers("/api/UserFollowing/{id}").permitAll();
		http.authorizeRequests().antMatchers("/api/UserFollowers/{id}").permitAll();
		http.authorizeRequests().antMatchers("/api/UserFavorites/{id}").permitAll();
		http.authorizeRequests().antMatchers("/api/UserLikes/{id}").permitAll();
		http.authorizeRequests().antMatchers("/api/UserPlaylists/{id}").permitAll();*/
		
		// Private pages (all other pages)

		/*http.authorizeRequests().antMatchers("/api/CreatePlaylist").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/api/EditPlaylist/{idPlaylist}").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/api/EditNewPlaylist/{idUser}").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/api/MyFollowers/{id}").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/api/MyFollowing/{id}").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/api/MyPlaylists/{id}").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/api/MyLikes/{id}").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/api/MyFavorites/{id}").hasAnyRole("USER");
		http.authorizeRequests().antMatchers("/api/Config/{id}").hasAnyRole("USER"); 
		http.authorizeRequests().antMatchers("/api/admin").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/api/adminCreateArtist").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/api/adminEditArtist").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/api/adminCreateSong").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers("/api/adminEditSong").hasAnyRole("ADMIN");
		*/
		// Use Http Basic Authentication
		http.httpBasic();

		// Login form
//		 http.formLogin().loginPage("/api/logIn");
//	        http.formLogin().usernameParameter("username");
//	        http.formLogin().passwordParameter("password");
//	        http.formLogin().defaultSuccessUrl("/");
//	        http.formLogin().failureUrl("/loginerror");
		// Logout
//	        http.logout().logoutUrl("/api/logOut");
//	        http.logout().logoutSuccessUrl("/");
		//disable csfr
		http.csrf().disable();

	}
	
	  @Override
	    protected void configure(AuthenticationManagerBuilder auth)
	            throws Exception {
	        // Database authentication provider
	        auth.authenticationProvider(authenticationProvider);
	    }

}