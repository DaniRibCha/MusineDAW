package com.example.security;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.example.repositories.UserRepository;

@Configuration
public class CSRFHandlerConfiguration extends WebMvcConfigurerAdapter {
	
	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		registry.addInterceptor(interceptor());
	}
	
	@Bean
	public HandlerInterceptorAdapter interceptor(){
		return new CSRFHandlerInterceptor();
	}
}

class CSRFHandlerInterceptor extends HandlerInterceptorAdapter {
	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserComponent userComponent;
	
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		// TODO Auto-generated method stub
		//return super.preHandle(request, response, handler);
		
		System.out.println(request.getHeader("Authorization"));
		
		if(request.getUserPrincipal()!=null){
			userComponent.setLoggedUser(userRepository.findByName(request.getUserPrincipal().getName()));
		}
		
		return true;
	}
	
	@Override
    public void postHandle(final HttpServletRequest request,
            final HttpServletResponse response, final Object handler,
            final ModelAndView modelAndView) throws Exception {
		
		if(modelAndView != null) {
			CsrfToken token = (CsrfToken) request.getAttribute("_csrf"); 
	    	modelAndView.addObject("token", token.getToken());
		}

		    	
    }
}
