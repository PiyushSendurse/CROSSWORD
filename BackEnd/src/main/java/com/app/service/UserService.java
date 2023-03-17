package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Book;
import com.app.pojos.Category;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.repository.IBookRepository;
import com.app.repository.ICategoryRepository;
import com.app.repository.IUserRepository;

@Transactional
@Service
public class UserService implements IUserService {

	@Autowired
	private IUserRepository userRepo;
	@Autowired
	private ICategoryRepository catRepo;
	
	@Autowired
	private IBookRepository bookRepo;
	
	@Autowired(required = false)
	private ModelMapper mapper;
	
	
	@Override
	public List<User> getAllUsers() {
		
		return userRepo.findAll();
	}
	@Override
	public User authenticateAdmin(LoginRequestDto dto) {
		// TODO Auto-generated method stub
		User user = userRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Wrong email/password"));
		if (user.getUserRole() == Role.ADMIN) {
			return user;
		} else {
			// return null;
			throw new ResourceNotFoundException("please login as a customer");
		}
	}

	@Override
	public User authenticateCustomer(LoginRequestDto dto) {
		// TODO Auto-generated method stub
				User user = userRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
						.orElseThrow(() -> new ResourceNotFoundException("Bad Credentials !!!!!"));
				if (user.getUserRole() == Role.CUSTOMER) {
					return user;
				} else {
					// return null;
					throw new ResourceNotFoundException("not a customer");
				}
		
	}

	@Override
	public List<Category> getAllCategories() {
		// TODO Auto-generated method stub
		return catRepo.findAll();
	}
	
	@Override
	public List<Book> getAllBooks(Long catId) {
		// return PizzaRepo.findById(catId);
				List<Book> allBooks = bookRepo.findAll();
				List<Book> reqBooks = new ArrayList<>();
				for (Book p : allBooks) {
					if (p.getBookCategory().getId() == catId) {
						reqBooks.add(p);
					}
				}
				System.out.println(reqBooks);
				return reqBooks;
	}

	
	@Override
	public User saveUserDetails(User user) {
		System.out.println("value of cart is while registering"+user.getCart());
		return userRepo.save(user);
	}

	@Override
	public String deleteCustomer(Long custId) {
		// TODO Auto-generated method stub
		String msg = "unable to delete customer !!";
		if (userRepo.existsById(custId)) {
			userRepo.deleteById(custId);
			msg = "customer deleted successfully !!";
		}
		return msg;
		
	}
}
