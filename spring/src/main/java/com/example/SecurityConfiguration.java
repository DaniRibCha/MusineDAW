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
	 http.authorizeRequests().antMatchers("/login").permitAll();
	 http.authorizeRequests().antMatchers("/Artist").permitAll();
	 http.authorizeRequests().antMatchers("/facebook").permitAll();
	 http.authorizeRequests().antMatchers("/google").permitAll();
	 http.authorizeRequests().antMatchers("/Playlist").permitAll();
	 http.authorizeRequests().antMatchers("/homestyle").permitAll();
	 http.authorizeRequests().antMatchers("/Artist/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/Playlist/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/ArtistFollowers/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/PlaylistTags/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/ArtistSong/{id}").permitAll();
	 http.authorizeRequests().antMatchers("/SearchPlaylist/{key}").permitAll();
	 http.authorizeRequests().antMatchers("/ArtistListBasic").permitAll();
	 http.authorizeRequests().antMatchers("/searchPlaylist").permitAll();
 // Private pages (all other pages)

 http.authorizeRequests().antMatchers("/createPlaylist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/editPlaylist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/UserPlaylists/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/PlaylistSongs/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/SongListBasic").hasAnyRole("USER"); 
 http.authorizeRequests().antMatchers("/UserFollowing/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/UserFollowers/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/UserFavorites/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/UserLikes/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyFollowers/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyPlaylists/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyLikes/{id}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/MyFavorites/{id}}").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/indexUtent_favoritos").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/indexUtent_likes").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/indexUtent_playlist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/searchUtent_playlist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/searchUtent_likes").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//searchUtent_tracks").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//seguidores_otroUsuario").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//seguidores").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//seguidos_otroUsuario").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("//seguidos").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/admin").hasAnyRole("ADMIN");

 // Login form
 http.formLogin().loginPage("/login");
 http.formLogin().usernameParameter("email");
 http.formLogin().passwordParameter("password");
 // Logout
 http.logout().logoutSuccessUrl("/");
 //disable csfr
 http.csrf().disable();

 }

}