package com.app.service;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Book;
import com.app.pojos.Category;
import com.app.repository.IBookRepository;

@Service
@Transactional
public class BookService implements  IBookService {


	@Autowired
	private IBookRepository bookRepo;

	@Autowired
	private ICategoryService catService;

	//To get all books of a specific category 
	@Override
	public List<Book> getAllBooksByCategory(Long catId) {

		//Create an empty arraylist of all books 
		List<Book> allBooks = new ArrayList<>();
		//fetch all books from database 
		allBooks=bookRepo.findAll();
		//create a empty new list to story books of specific category in it eg: all books fo fiction category
		List<Book> requestedBooks = new ArrayList<>();
		//for debugging
		System.out.println(allBooks);
		System.out.println(requestedBooks);

		// if category id from list of all books
		//matches with argument id(catID) then store it in requestedBooks list
		for(Book b : allBooks)
		{
			System.out.println(b.getBookCategory());
			if(b.getBookCategory().getId()==catId)
			{
				requestedBooks.add(b);
			}
		}
		//check if the value actually got inserted
		System.out.println(requestedBooks);
		// B.Serv--> IB.Serv -->BookServ.Controller --
		return requestedBooks;

	}

	//add book
	@Override
	public Book addBook(Long categoryId, Book addBook) {
		Category cat = catService.findCategory(categoryId);
		Book newBook= addBook;
		newBook.setBookCategory(cat);
		return bookRepo.save(newBook);

	}
	
		//delete book by ID
	@Override
		public String deleteBook(Long bookId) {
			// TODO Auto-generated method stub
			String msg = "Deletion of Book details failed Invalid Id!!!!!!!!!!!";
			if(bookRepo.existsById(bookId))
			{
				bookRepo.deleteById(bookId);
				msg="book deleted successfully !!";
			}
			return msg;
		}
		@Override
		public List<Book> getAllBooks()
		{
			List<Book> allBooks = new ArrayList<>();
			//fetch all books from database 
			allBooks=bookRepo.findAll();
			return allBooks;
			
		}

}
