package com.onlinebookstore.services.impl;

import com.onlinebookstore.entity.Book;
import com.onlinebookstore.repository.BookRepository;
import com.onlinebookstore.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements BookService {

    /*@Autowired
    private BookRepository bookRepository;

    public List<Book> getBooks() {
        return bookRepository.findAll();
    }
    @Override
    public Page<Book> findByCategoryId(Long id, Pageable pageable){
        return bookRepository.findByCategoryId(id, pageable);
    }*/
}
