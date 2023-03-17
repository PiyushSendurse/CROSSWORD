package com.app.service;

import com.app.dto.LoginRequestDto;
import com.app.dto.PlaceOrderDto;
import com.app.pojos.User;

public interface ICustomerService {
	
	
	User authenticateCustomer(LoginRequestDto dto);


	User saveUserDetails(User user);
	String placeOrder(PlaceOrderDto placeOrderDto);
}
