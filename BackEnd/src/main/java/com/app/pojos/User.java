//1. user cart 1 to 1 i have made it uni-dir

package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@Getter
@Setter
@ToString(exclude = { "cart","paymentCards","orders" })
@Table(name = "users_tbl")
@Entity
public class User extends BaseEntity {

	//--------User Data members-----------


	//fname must be between 2 to 20 characters 
	@Column(length = 20)
	private String firstName;

	//lname must be between 2 to 20 characters 
	@Column(length = 20)
	private String lastName;

	//admin, user, customer, owner role based field for future validations 
	@Enumerated(EnumType.STRING)
	@Column(name = "user_role", length = 20)
	private Role userRole;

	//User must have unique email ID
	@Column(length = 25, unique = true) // unique constraint
	private String email;

	@JsonProperty(access = Access.WRITE_ONLY)
	@Column(length = 20, nullable = false)
	private String password;


	
	@Column(length = 14)
	private String mobNo;
	private String address;
	
	//------------Relations-----------------


	
	
	//Book table will have foreign key cart id referencing cart id of shopping cart
	//lazy: if i fetch user details i should not get cart details
	// User(Customer) HAS-A Cart User 1<---->1 Cart
	//@JsonBackReference
	@OneToOne(mappedBy = "customer",cascade = CascadeType.ALL,orphanRemoval = true)
	@JoinColumn(name = "fk_cart_id")
	private ShoppingCart cart;
	
	@JsonBackReference
	@ElementCollection // Mandatory o.w : HIb throws MappingExc
	@CollectionTable(name = "payment_cards", 
	joinColumns = @JoinColumn(name = "user_id"))
	private List<PaymentCard> paymentCards = new ArrayList<>();
	
	@JsonBackReference
	@OneToMany(mappedBy = "billingUser",
			cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Order> orders = new ArrayList<>(); // init to empty list

	
	
	
	
	
	//Constructor for fname,lname,userole,email,password,phonenumber,address
	public User(@Length(min = 2, max = 20, message = "first name must be between 2 to 20 characters!") String firstName,
			@Length(min = 2, max = 20, message = "last name must be between 2 to 20 characters!") String lastName,
			Role userRole, String email, @Length(min = 3, max = 20) String password,
			@Length(min = 8, max = 15) String mobNo, String address) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.userRole = userRole;
		this.email = email;
		this.password = password;
		this.mobNo = mobNo;
		this.address = address;
	}
	
	
	// add a helper method to establish bi dir link between User n Cart
		public void addCart(ShoppingCart cart){
			this.setCart(cart);// parent ---> child
			cart.setCustomer(this);// child ---> parent
		}
	
	
		public void addOrder(Order order)
		{
			orders.add(order);
			order.setBillingUser(this);
		}

		
		public void removeOrder(Order order)
		{
			orders.remove(order);
			order.setBillingUser(null);
		}
	
	
		public List<Order> getOrders() {
			return orders;
		}
		public void setOrders(List<Order> orders) {
			this.orders = orders;
		}

		public List<PaymentCard> getPaymentCards() {
			return paymentCards;
		}
		public void setPaymentCards(List<PaymentCard> paymentCards) {
			this.paymentCards = paymentCards;
		}


}
