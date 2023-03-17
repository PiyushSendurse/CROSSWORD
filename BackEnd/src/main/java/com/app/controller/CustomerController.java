package com.app.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartItemDto;
import com.app.dto.LoginRequestDto;
import com.app.dto.PlaceOrderDto;
import com.app.dto.UserDto;
import com.app.pojos.User;
import com.app.service.CartItemService;
import com.app.service.CustomerService;

@RestController
//To enable CORS header 
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customers")
public class CustomerController {
	
	
	@Autowired
	private CustomerService custService;

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private JavaMailSender sender;

	@Autowired
	private CartItemService cartItemService;

	// authentication for customer
	@PostMapping("/customer/signin")
	public User validateCustomer(@RequestBody LoginRequestDto dto) {
		System.out.println("in emp signin " + dto);
		return custService.authenticateCustomer(dto);
	}

	@PostMapping("/customer/saveCustomerdetails")
	public User saveUserDetails(@RequestBody UserDto userDto) {
		User user = mapper.map(userDto, User.class);

		System.out.println("in save User " + user);// id : null...
		String destEmail = user.getEmail();
		String password = user.getPassword();
		String username = user.getFirstName();
		System.out.println("-----------sending mail-----------");
		System.out.println(" Email " + destEmail);
		SimpleMailMessage mesg = new SimpleMailMessage();
		mesg.setTo(destEmail);
		mesg.setSubject("Book Project");
		System.out.println("before password is " + password);
		mesg.setText("Hey " + username
				+ " you have been successfully Registered on  Crossword !!!!! \n Your password is " + " :"
				+ password + "\nDiscover the best services \nHave a Good Day!!!!!");
		System.out.println("after password is " + password);
		sender.send(mesg);
		return custService.saveUserDetails(user);
	}
	
	
	@PostMapping("/addCartItem")
	public String addCartItem(@RequestBody CartItemDto newCartItem)
	{
		System.out.println("inside customer controller !!");
		return cartItemService.addCartItem(newCartItem);
	}
	
	@PostMapping("/placeOrder")
	public String placeOrder(@RequestBody PlaceOrderDto placeOrderDto)
	{
		
		return custService.placeOrder(placeOrderDto);
	}

}
