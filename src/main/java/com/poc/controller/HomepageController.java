package com.poc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.poc.model.Customer;

@Controller
public class HomepageController {
	
	@GetMapping("/")
	public String homepage(Model model){
		model.addAttribute("customer",new Customer());
		return "pages/homepage";
	}
	
	@PostMapping("/submit")
	public String posthomepage(Model model,@ModelAttribute("customer") Customer customer){
		
		customer.setAddress(customer.getAddress() + " haha");
		customer.setName(customer.getName() + " your name is");
		return "pages/result";
	}
}
