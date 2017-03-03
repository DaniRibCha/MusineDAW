package com.example;

import org.springframework.context.annotation.Configuration;

@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
 @Override
 protected void configure(AuthenticationManagerBuilder auth)
 throws Exception {

 // Users
 auth.inMemoryAuthentication().withUser("user").password("pass")
 .roles("USER");

 auth.inMemoryAuthentication().withUser("admin").password("adminpass")
 .roles("USER", "ADMIN");
 }
 
 @Override
 protected void configure(HttpSecurity http) throws Exception {

 // Public pages
 
 // Private pages (all other pages)
 http.authorizeRequests().antMatchers("/searchUtent_playlist").hasAnyRole("USER");
 http.authorizeRequests().antMatchers("/admin").hasAnyRole("ADMIN");
 // Login form
 
 // Logout
 
 }

}