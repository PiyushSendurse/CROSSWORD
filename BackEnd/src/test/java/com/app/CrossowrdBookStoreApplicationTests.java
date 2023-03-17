package com.app;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.app.pojos.Book;
import com.app.repository.IBookRepository;
import com.app.service.IBookService;

@SpringBootTest
class CrossowrdBookStoreApplicationTests {

	@Autowired
	private IBookService bookService;
	
	@Autowired
	private IBookRepository bookRepository;
	
	@Test
	public void testBook()
	{
	Book b = new Book();
	
	b.setBookName("Harry Potter and chamber of secrets ");
	b.setAuthorName("JK rowling");
	b.setPrice(1000.0);
	b.setNoOfBooks(10);
	b.setDescription("Second chapter of the harry potter story");
	b.setImage("COC");
	
	bookRepository.save(b);
//	assertNotNull
	
	}
	
	
	
	

}
