package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;

public class BookDto {
	
	private String bookName;
	private int noOfBooks;
	private String description;
	private Double price;
	private String authorName;
	private String image;
	

	public BookDto(String bookName, int noOfBooks, String description, Double price, String authorName, String image) {
		super();
		this.bookName = bookName;
		this.noOfBooks = noOfBooks;
		this.description = description;
		this.price = price;
		this.authorName = authorName;
		this.image = image;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public int getNoOfBooks() {
		return noOfBooks;
	}
	public void setNoOfBooks(int noOfBooks) {
		this.noOfBooks = noOfBooks;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getAuthorName() {
		return authorName;
	}
	public void setAuthorName(String authorName) {
		this.authorName = authorName;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}

	
	
}
