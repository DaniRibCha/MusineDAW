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

 auth.inMemoryAuthentication().withUser("admin").password("adminpass")
 .roles("USER", "ADMIN");
 }
 
 @Override
 protected void configure(HttpSecurity http) throws Exception {

 // Public pages
 
 // Private pages (all other pages)
 http.authorizeRequests().antMatchers("/config").hasAnyRole("USER");
 // Login form
 
 // Logout
 
 }

}