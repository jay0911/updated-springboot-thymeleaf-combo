package com.poc.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.poc.model.Customer;

@Controller
public class HomepageController {
	
	@Value("${name}")
	String name;
	
	@Value("${address}")
	String address;
	
	@GetMapping("/")
	public String homepage(Model model){		
		model.addAttribute("username", name);
		model.addAttribute("address", address);
		model.addAttribute("customer",new Customer());
		return "pages/homepage";
	}
	
	@GetMapping("/ionic")
	public String ionic(){		
		return "pages/index";
	}
	
	@GetMapping("/actionsheet")
	public String actionsheet(){		
		return "pages/actionsheet";
	}
	
	@PostMapping("/submit")
	public String posthomepage(Model model,@ModelAttribute("customer") Customer customer){
		
		customer.setAddress(customer.getAddress() + " haha");
		customer.setName(customer.getName() + " your name is");
		return "pages/result";
	}
}
