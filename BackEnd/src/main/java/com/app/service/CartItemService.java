package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.CartItemDto;
import com.app.pojos.Book;
import com.app.pojos.CartItem;
import com.app.pojos.ShoppingCart;
import com.app.pojos.User;
import com.app.repository.IBookRepository;
import com.app.repository.ICartItemsRepository;
import com.app.repository.IUserRepository;

@Service
public class CartItemService implements ICartItemService {

	
	
	
	@Autowired
	private ICartItemsRepository cartItemRepo;
	@Autowired
	private IUserRepository userRepo;
	@Autowired
	private IBookRepository bookRepo;
	@Autowired
	private IBookService bookService;

//	@Override
//	public String addCartItem(CartItemDto newCartItem) {
//		// TODO Auto-generated method stub
//		System.out.println("inside cartimplementation !!");
//		User user = userRepo.findById(newCartItem.getUserId()).get();
//		// System.out.println(user);
//
//		List<Pizza> PizzaList = PizzaService.getAllPizzas(newCartItem.getCatId());
//		Pizza PizzaToAdd = new Pizza();
//
//		for (Pizza p : PizzaList) {
//			if (p.getId() == 4) {
//				PizzaToAdd = p;
//				// System.out.println(PizzaToAdd);
//			}
//		}
//		System.out.println("before cartItem");
//		CartItem cartItem = new CartItem();
//		cartItem.setCartProduct(PizzaToAdd);
////		System.out.println(cartItem.getCartProduct());
////		System.out.println("after cartItem");
//
//		if (user.getCart() == null) {
//			Cart cart = new Cart();
//			cart.addCartItem(cartItem);
//			user.addCart(cart);
//		} else {
//
//			user.getCart().addCartItem(cartItem);
//			user.addCart(user.getCart());
//		}
//
//		System.out.println("before setting cartCounts !!");
//		int totalItems = user.getCart().getTotalItems();
//		user.getCart().setTotalItems(totalItems + 1);
//		System.out.println("after setting cartCounts !!");
//
//		return "pizza added to cart successfully !!";
//	}

	@Override
	public String addCartItem(CartItemDto newCartItem) {
		// TODO Auto-generated method stub
		System.out.println("inside cartimplementation !!");
		User user = userRepo.findById(newCartItem.getUserId()).get();
		// System.out.println(user);

		List<Book> bookList = bookService.getAllBooksByCategory(newCartItem.getCatId());
		Book bookToAdd = new Book();

		for (Book b : bookList) {
			if (b.getId() == newCartItem.getBookID()) {
				bookToAdd = b;
				// System.out.println(productToAdd);
			}
		}
		System.out.println("before cartItem");
		CartItem cartItem = new CartItem();
		cartItem.setCartProduct(bookToAdd); // problem was here
		System.out.println(cartItem.getCartProduct());
		System.out.println("after cartItem");

		Double price = bookToAdd.getPrice();
		if (user.getCart() == null) {
			ShoppingCart cart = new ShoppingCart();
			cart.addCartItem(cartItem);
			user.addCart(cart);
			double totalItems = user.getCart().getTotalItems();
			user.getCart().setTotalItems(price);
		} else {

			user.getCart().addCartItem(cartItem);
			user.addCart(user.getCart());
			double totalItems = user.getCart().getTotalItems();
			user.getCart().setTotalItems(totalItems + price);
		}
	//	System.out.println("before setting cartCounts !!");
		
	//	System.out.println("after setting cartCounts !!");
		return "Book booked successfully !!";
	}
}
