package com.example;

import javax.servlet.http.HttpServletRequest;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

public class SecurityConfigurationController {
	@RequestMapping("/home")
	public String home(Model model, HttpServletRequest request) {

	 model.addAttribute("admin", request.isUserInRole("ADMIN"));
	 return "home";
	}
}
