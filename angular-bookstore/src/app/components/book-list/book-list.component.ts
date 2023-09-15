import {Component, OnInit} from '@angular/core';
import {Book} from "../../common/book/book.component";
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit{
  constructor(
    private _bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  Books: Book[];
  currentCategoryId: number;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(()=> {
      this.listBooks();
    });
  }

  listBooks() {
    this.currentCategoryId = this.activatedRoute.snapshot.paramMap.has('id') ?
      Number(this.activatedRoute.snapshot.paramMap.get('id')) : 1;

    this._bookService.getBooks(this.currentCategoryId).subscribe({
        next: (data) => this.Books = data,
        error:  (error) => console.log("Error fetching books data: ", error)
    })
  }
}
