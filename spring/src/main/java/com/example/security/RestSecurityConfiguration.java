package com.example.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@Order(1)
public class RestSecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	public UserRepositoryAuthenticationProvider userRepoAuthProvider;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.antMatcher("/api/**");
		
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/logIn").authenticated();
		
		// URLs that need authentication to access to it
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/MyPlaylists/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/MyFavorites/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/MyLikes/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/FollowNotFollowArtist/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/WallPlaylistsLogged/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/CreatePlaylist/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/EditPlaylist/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/DeletePlaylist/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/Playlist/Like").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/Playlist/NotLike").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/Song/AddFavorite").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/api/Song/DeleteFavorite").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/ConfigUserData/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/image/upload/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/FollowNotFollowUser/**").hasRole("USER");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/AdminEditArtist/**").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/AdminCreateArtist").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/AdminCreateSongOfArtist/**").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/AdminAddArtistInSong/**").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/AdminRemoveArtistBySong/**").hasAnyRole("ADMIN");
		http.authorizeRequests().antMatchers(HttpMethod.PUT, "/api/AdminEditSong/**").hasAnyRole("ADMIN");
		
		
		// Other URLs can be accessed without authentication
		http.authorizeRequests().anyRequest().permitAll();

		// Disable CSRF protection (it is difficult to implement with ng2)
		http.csrf().disable();

		// Use Http Basic Authentication
		http.httpBasic();

		// Do not redirect when logout
		http.logout().logoutSuccessHandler((rq, rs, a) -> {	});
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {

		// Database authentication provider
		auth.authenticationProvider(userRepoAuthProvider);
	}
}