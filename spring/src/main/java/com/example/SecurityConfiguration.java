package com.example;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
 @Override
protected void configure(AuthenticationManagerBuilder auth)
throws Exception {

 // Users
 auth.inMemoryAuthentication().withUser("user").password("pass")
 .roles("USER");

auth.inMemoryAuthentication().withUser("admin").password("adminpass").roles("USER", "ADMIN");
}
 @Override
protected void configure(HttpSecurity http) throws Exception {
	 http.headers().frameOptions().disable();
 // Public pages
	 http.authorizeRequests().antMatchers("/").permitAll();
	 http.authorizeRequests().antMatchers("/login").permitAll();
	 http.authorizeRequests().antMatchers("/Artist/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/Playlist/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/ArtistFollowers/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/ArtistSong/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/SearchPlaylist/{key}").permitAll();
	 http.authorizeRequests().antMatchers("/ArtistListBasic").permitAll();
	 http.authorizeRequests().antMatchers("/SearchPlaylist").permitAll();
	 http.authorizeRequests().antMatchers("/UserPlaylists/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/SongListBasic").permitAll(); 
	 http.authorizeRequests().antMatchers("/UserFollowing/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/UserFollowers/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/UserFavorites/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/UserLikes/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/UserPlaylists/{id}").permitAll();
 // Private pages (all other pages)

 http.authorizeRequests().antMatchers("/CreatePlaylist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/EditPlaylist/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/EditNewPlaylist/{idUser}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyFollowers/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyPlaylists/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyLikes/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyFavorites/{id}}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/Config/{id}").hasAnyRole("USER"); 
http.authorizeRequests().antMatchers("/admin").hasAnyRole("ADMIN","USER");

 // Login form
 http.formLogin().loginPage("/login");
 //http.formLogin().usernameParameter("email");
 //http.formLogin().passwordParameter("password");
 // Logout
 http.logout().logoutSuccessUrl("/");
 //disable csfr
 http.csrf().disable();

 }

}