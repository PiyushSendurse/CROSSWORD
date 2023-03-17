//1. check what to do with description 
//2. no. of books ka kya karna hai
package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Table(name="books")
public class Book extends BaseEntity{

	//---------Data members----------- 
	
	/*bookName 
	 * noOfBooks
	 * description
	 * price
	 * authorName
	 * createdDateAndTime
	 * updatedDateAndTime
	 * inStock
	 * */ 
	
	@Column(length = 30,unique = true)
	private String bookName;
	private int noOfBooks;
	@Column(length = 100)
	private String description;
	private Double price;
	private String authorName;
	private boolean inStock;
	@Column(length = 20)
	private String image;
	
	//in bi-dir  serializing them to JSON can lead to an infinite loop of references. 
	//owning side, many side, one category has many books
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "category_id")
	private Category bookCategory;

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

	public boolean isInStock() {
		return inStock;
	}

	public void setInStock(boolean inStock) {
		this.inStock = inStock;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public Category getBookCategory() {
		return bookCategory;
	}

	public void setBookCategory(Category bookCategory) {
		this.bookCategory = bookCategory;
	}
	
	@Override
	public String toString() {
		return "Book [bookName=" + bookName + ", noOfBooks=" + noOfBooks + ", description=" + description + ", price="
				+ price + ", authorName=" + authorName + ", inStock=" + inStock + ", image=" + image + "]";
	}

	public Book(String bookName, int noOfBooks, String description, @NotNull Double price, String authorName,
			boolean inStock, String image, Category bookCategory) {
		super();
		this.bookName = bookName;
		this.noOfBooks = noOfBooks;
		this.description = description;
		this.price = price;
		this.authorName = authorName;
		this.inStock = inStock;
		this.image = image;
		this.bookCategory = bookCategory;
	}
	
	

	
	
	

}
