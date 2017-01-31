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
	
	@GetMapping("/popover")
	public String popover(){		
		return "pages/popover";
	}
	
	@GetMapping("/actionsheet")
	public String actionsheet(){		
		return "pages/actionsheet";
	}
	
	@GetMapping("/backdrop")
	public String backdrop(){		
		return "pages/backdrop";
	}
	
	@GetMapping("/checkbox")
	public String checkbox(){		
		return "pages/checkbox";
	}
	
	@GetMapping("/ionrefresher")
	public String refresher(){		
		return "pages/ionrefresher";
	}
	
	@GetMapping("/popup")
	public String popup(){
		return "pages/popup";
	}
	
	@GetMapping("/ionform")
	public String ionsubmit(Model model){	
		model.addAttribute("customer",new Customer());
		return "pages/ionform";
	}
	
	@GetMapping("/ionradio")
	public String ionradio(){		
		return "pages/ionradio";
	}

	@GetMapping("/ionloading")
	public String ionloading(){		
		return "pages/ionloading";
	}
	
	@GetMapping("/sidemenu")
	public String sidemenu(){		
		return "pages/sidemenu";
	}
	
	@GetMapping("/ionlist")
	public String ionlist(){		
		return "pages/ionlist";
	}
	
	@GetMapping("/ionsearch")
	public String ionsearch(){
		return "pages/ionsearch";
	}
	
	@GetMapping("/ionmodal")
	public String ionmodal(){		
		return "pages/ionmodal";
	}
	
	@GetMapping("/infinitescroll")
	public String infinitescroll(){		
		return "pages/infinitescroll";
	}
	
	@GetMapping("/infinitescroll2")
	public String infinitescroll2(){		
		return "pages/infinitescroll2";
	}
	
	@GetMapping("/ionnav")
	public String ionnav(){		
		return "pages/ionnav";
	}
	
	@PostMapping("/submit")
	public String posthomepage(Model model,@ModelAttribute("customer") Customer customer){
		
		customer.setAddress(customer.getAddress() + " haha");
		customer.setName(customer.getName() + " your name is");
		return "pages/result";
	}
	
	@PostMapping("/ionsubmit")
	public String postionresult(Model model,@ModelAttribute("customer") Customer customer){
		
		customer.setAddress(customer.getAddress() + " dumaan sa server side");
		customer.setName(customer.getName() + " dumaan sa server side");
		customer.setGender(customer.getGender() + " dumaan sa server side");
		
		return "pages/result";
	}

}
