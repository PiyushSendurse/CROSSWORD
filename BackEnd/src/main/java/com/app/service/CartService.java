package com.app.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.repository.ICartRepository;

@Service
@Transactional
public class CartService implements ICartService {

	  @Autowired
	  private ICartRepository cartRepo;
	  
}
