package com.todoApp.rest.webservices.restfulwebservices.helloworld;

public class HelloWorldBean {

	public String getMessage() {
		return message;
	}

	private String message;

	public HelloWorldBean(String message) {
		// TODO Auto-generated constructor stub
		
		this.message = message;
	}

//	public String getMessage() {
//		return message;
//	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}

}
