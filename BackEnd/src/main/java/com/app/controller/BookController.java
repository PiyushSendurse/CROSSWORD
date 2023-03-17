package com.app.controller;


import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookDto;
import com.app.pojos.Book;
import com.app.service.IBookService;
import org.modelmapper.ModelMapper;
//handles incoming request and deserialize them
//responsebody : JSON--> java 
@RestController //(@responseBody + @Controller)
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/book")
public class BookController {
	
	@Autowired
	private IBookService bookService;
	
	@Autowired
	private ModelMapper mapper;
	
	@PostMapping("/addBook/{categoryId}")
	public Book addBook(@PathVariable Long categoryId, @RequestBody BookDto newBook) {
		Book newProduct = mapper.map(newBook, Book.class);
		return bookService.addBook(categoryId, newProduct);
	}
	
	@DeleteMapping("/deleteBook/{bookId}")
	public String deleteBook(@PathVariable Long bookId) {
		return bookService.deleteBook(bookId);
	}

	@GetMapping("/getAllBooks/{catId}")
	public List<Book> getAllBooks(@PathVariable Long catId) {
		return bookService.getAllBooksByCategory(catId);
	}
	
//	@GetMapping("/getAllTheBooks")
//	public List<Book> getAllBooks() {
//		return bookService.getAllBooks();
//	}
//	
//	

//	@PutMapping("/updateBook")
//	public Book updateProduct(@RequestBody PizzaDtoToUpdate detachedProduct) {
//
//		return bookService.updatePizza(detachedProduct);
//	
//	}
}
