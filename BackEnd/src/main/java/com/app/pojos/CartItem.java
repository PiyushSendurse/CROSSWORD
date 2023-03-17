
package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor

@Table(name = "cart_item")
@ToString(exclude = "Book")
@Entity
public class CartItem extends BaseEntity {
	
	
//	private int quantity;
//	private double totalPrice;
	
	// Cart 1<---* CartItem
		@ManyToOne
		@JoinColumn(name = "fk_cart_id", nullable = false)
		private ShoppingCart cart;
		
		
		// cartitem 1 ---> 1 book 
		
		@OneToOne
		@JoinColumn(name="fk_book_id")
		private Book cartProduct;	
	
	public ShoppingCart getCart() {
		return cart;
	}


	public void setCart(ShoppingCart cart) {
		this.cart = cart;
	}


	public Book getCartProduct() {
		return cartProduct;
	}


	public void setCartProduct(Book cartProduct) {
		this.cartProduct = cartProduct;
	}


	
}
