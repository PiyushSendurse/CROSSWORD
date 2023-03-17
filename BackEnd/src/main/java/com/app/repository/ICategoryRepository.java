//1. Ask vaibhav to explain this 
package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Category;

@Repository
//JpaRepository interface provides basic CRUD for Category having primary key long
public interface ICategoryRepository extends JpaRepository<Category, Long>{

//	Category getByCategoryName(String categoryName);
	
}
