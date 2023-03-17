// Helper methods add remove left 
package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name="categories")
//To avoid recursion with books
@ToString(exclude = "books")
public class Category extends BaseEntity {
	
	
	@Column(length = 30,unique = true)
	private String categoryName;
	@Column(length = 300)
	private String description;
	

	public Category(String categoryName, String description) {
		super();
		this.categoryName = categoryName;
		this.description = description;
	}
	
	
	
	// one to many : bi dir Category 1--->* Book
	//Category -- one , parent , inverse(since no FK mapping)
	@JsonBackReference
	@OneToMany(mappedBy = "bookCategory",
			cascade = CascadeType.ALL, orphanRemoval = true
		//	,fetch = FetchType.EAGER 
			)
	private List<Book> books = new ArrayList<>();// init to empty list
	
	//add a method(convenience/helper) to establish a bi dir asso. between entities
		public void addBook(Book b)
		{
			//bookCategory --> book
			books.add(b);
			//book --> bookCategory
			b.setBookCategory(this);
		}
		//add a method(convenience/helper) to remove a bi dir asso. between entities
			public void removeBook(Book b)
			{
				//bookCategory ----X---> book
				books.remove(b);
				//book ----X----> bookCategory
				b.setBookCategory(null);			
			}

			
}
