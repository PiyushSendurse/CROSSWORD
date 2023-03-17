package com.app.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Book;

@Repository
public interface IBookRepository extends JpaRepository<Book, Long> {

//	Book getBybookName (String bookName);
}
