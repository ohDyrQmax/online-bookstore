import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Category} from "../../common/category/category.component";

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit{
  constructor(
    private bookService: BookService,
  ) {}

  bookCategories: Category[];

  ngOnInit() {
    this.listBookCategories();
  }

  listBookCategories()  {
    this.bookService.getCategories().subscribe({
      next: (data) => this.bookCategories = data,
      error:  (error) => console.log('Error fetching category: ', error),
    })
  }
}
