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

 // Public pages
	 http.authorizeRequests().antMatchers("/").permitAll();
 
 // Private pages (all other pages)
 http.authorizeRequests().antMatchers("/Artist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/createPlaylist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/editPlaylist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/facebook").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/google").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/UserPlaylists/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/ArtistSong/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/PlaylistSongs/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/SongListBasic").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/PlaylistTags/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/UserFollowing/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/UserFollowers/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/UserFavorites/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/UserLikes/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyFollowers/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyPlaylists/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyLikes/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyFavorites/{id}}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/ArtistFollowers/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/Artist/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/Playlist/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/SearchPlaylist/{key}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/ArtistListBasic").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/homestyle").hasAnyRole("USER");
 //http.authorizeRequests().antMatchers("/index").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/indexUtent_favoritos").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/indexUtent_likes").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/indexUtent_playlist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/login").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/Playlist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/searchPlaylist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/searchUtent_playlist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/searchUtent_likes").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//searchUtent_tracks").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//seguidores_otroUsuario").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//seguidores").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//seguidos_otroUsuario").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//seguidos").hasAnyRole("USER");

 
 
 
 
 // Login form

 // Logout

 }

}