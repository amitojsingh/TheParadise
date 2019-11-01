import { Component, OnInit } from '@angular/core';
import {book} from "../book";
import {bookServiceService} from '../book-service.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css'],
  providers: [bookServiceService]
})

export class HomeListComponent implements OnInit {

  books: book[]

  constructor(private bookService: bookServiceService) { }

  ngOnInit() {
    this.bookService
      .getbooks()
      .then((books: book[]) => {
        this.books = books.map(book => {
          return book;
        });
      });
  }

}
