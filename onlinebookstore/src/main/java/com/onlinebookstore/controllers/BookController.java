package com.onlinebookstore.controllers;

import com.onlinebookstore.entity.Book;
import com.onlinebookstore.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BookController {

    /*@Autowired
    private BookService bookService;
//    @GetMapping("books/{id}")
//    public ResponseEntity<?> getBook(@PathVariable("id") Long id){
//        return new ResponseEntity<>(, HttpStatus.OK);
//    }

    @GetMapping("/allBooks")
    private List<Book> getBooks() {
        return bookService.getBooks();
    }*/
}
