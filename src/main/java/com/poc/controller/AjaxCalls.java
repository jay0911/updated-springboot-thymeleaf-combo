package com.poc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poc.model.Customer;

@RestController
public class AjaxCalls {
	
	@GetMapping("/refresh")
	public List<Customer> refresher(){		
		List<Customer> c = new ArrayList<Customer>();
		c.add(new Customer("jay1","cainta"));
		c.add(new Customer("jay2","taytay"));
		c.add(new Customer("jay3","binangonan"));
		c.add(new Customer("jay4","phililia"));
		c.add(new Customer("jay5","cardona"));	
		return c;
	}
}
