package com.poc.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.poc.model.Customer;
import com.poc.model.Id;

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
	
	@GetMapping("/infiniterefresh")
	public List<Id> infiniterefresh(){		
		List<Id> c = new ArrayList<Id>();
		c.add(new Id("30"));
		c.add(new Id("31"));
		c.add(new Id("32"));
		c.add(new Id("33"));
		c.add(new Id("34"));
		c.add(new Id("35"));
		c.add(new Id("36"));
		c.add(new Id("37"));
		c.add(new Id("38"));
		return c;
	}
}
