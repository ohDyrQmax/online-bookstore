import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Book} from "../common/book/book.component";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/api/v1/books";
  constructor(private httpClient: HttpClient) { }

  getBooks = (): Observable<Book[]> => this.httpClient.get<getResponseBooks>(this.baseUrl).pipe(
    map(response => response._embedded.books)
  );
}

interface getResponseBooks {
  _embedded: {
    books: Book[]
  }
}
