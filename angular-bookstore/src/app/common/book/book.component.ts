import {Component} from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class Book {
  sku: string = '';
  name: string = '';
  description: string = '';
  unitPrice: number = 0;
  imageUrl: string = '';
  active!: boolean;
  unitsInStock: number = 0;
  createdOn!: Date;
  updatedOn!: Date;
}
