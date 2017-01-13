package com.poc.model;

public class Customer {
	private String name;
	private String address;
	private String gender;
	private boolean interested;
	
	public Customer(){}
	
	public Customer(String name, String address){
		this.name = name;
		this.address = address;
	}
	
	public Customer(String name, String address,String gender,boolean interested){
		this.name = name;
		this.address = address;
		this.gender  = gender;
		this.interested = interested;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public boolean isInterested() {
		return interested;
	}

	public void setInterested(boolean interested) {
		this.interested = interested;
	}
}
