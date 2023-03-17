package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
@Entity
@Table(name="orders")
public class Order extends BaseEntity {
	
	private int billingAmount;
	private String address;
	
//	@JsonBackReference
//	@ManyToOne
//	@JoinColumn(name = "category_id")
//	private Category bookCategory;
	
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name = "buser_id")
	private User billingUser;
	
	@Override
	public String toString() {
		return "Order [billingAmount=" + billingAmount + ", address=" + address + "]";
	}

	public int getBillingAmount() {
		return billingAmount;
	}

	public void setBillingAmount(int billingAmount) {
		this.billingAmount = billingAmount;
	}

	public User getBillingUser() {
		return billingUser;
	}

	public void setBillingUser(User billingUser) {
		this.billingUser = billingUser;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Order(int billingAmount, String address) {
		super();
		this.billingAmount = billingAmount;
		this.address = address;
	}

	public Order() {
		super();
	}

	

}
