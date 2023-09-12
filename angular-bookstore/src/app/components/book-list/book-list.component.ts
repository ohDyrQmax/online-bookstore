import {Component, OnInit} from '@angular/core';
import {Book} from "../../common/book/book.component";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  constructor(private _bookService: BookService) {
  }

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
