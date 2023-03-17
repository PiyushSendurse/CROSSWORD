package com.app.service;

import java.util.List;

import com.app.pojos.Book;


public interface IBookService {


	List<Book> getAllBooksByCategory(Long catId);

	Book addBook(Long categoryId, Book addBook);

	
	
	String deleteBook(Long bookId);
	 List<Book> getAllBooks();

//	Book updateBook(BookDtoToUpdate detachedPizza);

}
