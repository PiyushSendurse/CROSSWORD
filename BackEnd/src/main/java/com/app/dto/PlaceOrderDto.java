package com.app.dto;

import java.time.LocalDate;

public class PlaceOrderDto {
	
	private String cardNo;
	
	private LocalDate expDate;
	
	private String cvv;
	
	private Long userId;
	
	private String address;
	
	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCardNo() {
		return cardNo;
	}

	public void setCardNo(String cardNo) {
		this.cardNo = cardNo;
	}

	public LocalDate getExpDate() {
		return expDate;
	}

	public void setExpDate(LocalDate expDate) {
		this.expDate = expDate;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public PlaceOrderDto(String cardNo, LocalDate expDate, String cvv,String address, Long userId) {
		super();
		this.cardNo = cardNo;
		this.expDate = expDate;
		this.cvv = cvv;
		this.address=address;
		this.userId = userId;
		
	}

	public PlaceOrderDto() {
		super();
	}
	
	

}
