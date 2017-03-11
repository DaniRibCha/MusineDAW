package com.example;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserComponent userComponent;
	
	@RequestMapping("login")
	public String getLogin(){
		return "login";
	}
	
	
	@RequestMapping("/Logout")
	public String getIndexLogOut(HttpSession session, Model model){
		
		boolean login=false;
		
		session.invalidate();
		
		model.addAttribute("login",login);
		
		return "index";
	}
	
	@RequestMapping("/")
	public String getIndex(HttpSession session, Model model,
			@RequestParam(value = "userName", defaultValue = "") String userName,
			@RequestParam(value = "email", defaultValue = "") String email, 
			@RequestParam(value = "password", defaultValue = "") String password){
		
		boolean login=false;
		
		if(session.isNew()){
			User u;
			//mail vacia->form del login
			if(email.equals("")){
				u=userRepository.findByName(userName);
				if(u==null){ //nombre no correcto
					session.invalidate();
					return "login";
				}
				String psw=u.getPasswordHash();
				if(password.equals(psw)){
					login=true;
					//session.setMaxInactiveInterval(30);
					session.setAttribute("idUser", u.getId_user());
				}else{//nombre correcto y password no correcta
					session.invalidate();
					return "login";
				}
			}else{//form del registro de nuevo usuario
				u=new User(userName, "unknown", password, email);
				userRepository.save(u);
				u=userRepository.findByName(userName);
				login=true;
				session.setAttribute("idUser", u.getId_user());
				//session.setMaxInactiveInterval(30);
			}
		}else{
			login=true;
		}
		
		model.addAttribute("idUser",session.getAttribute("idUser"));
		
		model.addAttribute("login",login);
		
		
		return "index";
	}

}
