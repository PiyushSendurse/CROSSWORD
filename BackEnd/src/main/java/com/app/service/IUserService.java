package com.app.service;

import java.util.List;

import com.app.dto.LoginRequestDto;
import com.app.pojos.Book;
import com.app.pojos.Category;
import com.app.pojos.User;

public interface IUserService {
	
	List<User> getAllUsers();
	User authenticateCustomer(LoginRequestDto dto);
	
	User authenticateAdmin(LoginRequestDto dto);

	List<Category> getAllCategories();

	List<Book> getAllBooks(Long catId);

	
	User saveUserDetails(User user);

	String deleteCustomer(Long custId);
	
}
