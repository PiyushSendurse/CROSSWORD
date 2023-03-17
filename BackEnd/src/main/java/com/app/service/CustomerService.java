package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.LoginRequestDto;
import com.app.dto.PlaceOrderDto;
import com.app.pojos.Order;
import com.app.pojos.PaymentCard;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.repository.IBookRepository;
import com.app.repository.ICategoryRepository;
import com.app.repository.IUserRepository;

@Transactional
@Service
public class CustomerService implements ICustomerService
{

	@Autowired
	private IUserRepository userRepo;

	@Autowired
	private ICategoryRepository catRepo;

	@Autowired
	private IBookRepository bookRepo;

	@Autowired(required = false)
	private ModelMapper mapper;

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
	public User saveUserDetails(User user) {
		
		System.out.println("value of cart is while registering"+user.getCart());
		return userRepo.save(user);
	}

	
	@Override
	public String placeOrder(PlaceOrderDto placeOrderDto) {
		// TODO Auto-generated method stub
//		System.out.println("inside service");
//		User user=userRepo.findById(placeOrderDto.getUserId()).get();
//		if(user.getCart().getTotalItems()==0)
//		{
//			return "you haven't added any items to carts";
//		}
//		List<PaymentCard> paymentCards=user.getPaymentCards();
//		System.out.println(paymentCards);
//		if(paymentCards.size()==0)
//		{
//			System.out.println("inside if");
//			return "card not found";
//		}
//		
//		for(PaymentCard p:paymentCards)
//		{
//			System.out.println("inside for ");
//			System.out.println();
//			if(p.getCardNo().equals(placeOrderDto.getCardNo()) && p.getCvv().equals(placeOrderDto.getCvv()))
//			{
//				System.out.println("inside first if of for ");
//				if(p.getBalance()>user.getCart().getTotalItems())
//				{
//					System.out.println("inside second if of for ");
//					int balance=p.getBalance();
//					p.setBalance(balance-user.getCart().getTotalItems());
//					Order order=new Order(user.getCart().getTotalItems() ,placeOrderDto.getAddress());
//					user.addOrder(order);
//					user.getCart().setTotalItems(0);
//					return "order placed successfully !!";
//					
//				}else
//				{
//					return "insufficient balance";
//				}
//				
//			}
//		}
//		
//		System.out.println("outside if");
		return null;
	}



	
	}
