package com.app.service;

import org.springframework.stereotype.Service;

import com.app.dto.CartItemDto;


public interface ICartItemService  {

	String addCartItem(CartItemDto newCartItem);
}
