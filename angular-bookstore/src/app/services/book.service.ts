import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Book} from "../common/book/book.component";
import {Category} from "../common/category/category.component";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/api/v1/books";
  private categoryUrl = "http://localhost:8080/api/v1/bookCategories";
  constructor(private httpClient: HttpClient) { }

  getBooks = (id: number): Observable<Book[]> => this.httpClient.get<getResponseBooks>(this.baseUrl+`/search/categoryId?id=${id}`)
    .pipe(map(response => response._embedded.books));

  getCategories = (): Observable<Category[]> => this.httpClient.get<getResponseCategories>(this.categoryUrl)
    .pipe(map(response  => response._embedded.bookCategories));
}

interface getResponseBooks {
  _embedded: {
    books: Book[]
  }
}

interface getResponseCategories{
  _embedded:{
    bookCategories: Category[]
  }
}
