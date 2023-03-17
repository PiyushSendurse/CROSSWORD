package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.ShoppingCart;

@Repository
public interface ICartRepository extends JpaRepository<ShoppingCart, Long> {

}
