//1. constructors
//2. to string 
//3. getter setters 

package com.app.pojos;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Getter
@Setter
@Table(name = "shopping_cart")
@Entity
public class ShoppingCart extends BaseEntity {
	
	@Column(name = "total_items")
	private double totalItems;
	
	@CreationTimestamp // at the time of saving entity
	private LocalDateTime createdOn;
	
	@UpdateTimestamp //at them time of updating cart
	private LocalDateTime updatedOn;
	
	// Cart HAS-A Customer Cart <----> User
	// Cart : one , child , owning
	@OneToOne // def fetch type : EAGER
	@JoinColumn(name = "customer_id")
	private User customer;
	
	
	//Cart ---> CartItems : one to many
	//one , parent , inverse
	@OneToMany(mappedBy = "cart",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<CartItem> cartItems=new ArrayList<>();
	
	
	public void setTotalItems(Double price) {
		this.totalItems = price;
	}



	public LocalDateTime getCreatedOn() {
		return createdOn;
	}

	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}

	public LocalDateTime getUpdatedOn() {
		return updatedOn;
	}

	public void setUpdatedOn(LocalDateTime updatedOn) {
		this.updatedOn = updatedOn;
	}

	public User getCustomer() {
		return customer;
	}

	public void setCustomer(User customer) {
		this.customer = customer;
	}

	public List<CartItem> getCartItems() {
		return cartItems;
	}

	public void setCartItems(List<CartItem> cartItems) {
		this.cartItems = cartItems;
	}
	public void addCartItem(CartItem item)
	{
		cartItems.add(item);
		item.setCart(this);
		
	}
	public void removeCartItem(CartItem item)
	{
		cartItems.remove(item);
		item.setCart(null);
	}
	
	
	@Override
	public String toString() {
		return "ShoppingCart [totalItems=" + totalItems + ",  createdOn="
				+ createdOn + ", updatedOn=" + updatedOn + "]";
	}
	
}
