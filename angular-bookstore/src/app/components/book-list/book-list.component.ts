import {Component, OnInit} from '@angular/core';
import {Book} from "../../common/book/book.component";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  constructor(private _bookService: BookService) {
  }

  books: Book[] = [
    {
      "sku": 'text-100',
      "name":'C Programing',
      "description":'Learn C',
      "unitPrice":600.00,
      "imageUrl":"assets/images/books/text-100.png",
      "active":true,
      "unitsInStock":100,
      "createdOn": new Date(),
      "updatedOn": null
    },
    {
      "sku": 'text-101',
      "name":'C Programing',
      "description":'Learn C',
      "unitPrice":700.00,
      "imageUrl":"assets/images/books/text-101.png",
      "active":true,
      "unitsInStock":100,
      "createdOn": new Date(),
      "updatedOn": null
    }
  ];

  Books: Book[];

  ngOnInit() {
  this.listBooks();
  }

  listBooks() {
    this._bookService.getBooks().subscribe(
      data => {
        this.Books = data
      }, error => {
        console.log("Error fetching books data: ", error);
      }, () => {
        console.info("Cool")
      }
    )
  }
}
