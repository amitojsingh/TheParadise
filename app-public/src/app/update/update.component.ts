import { Component, OnInit } from '@angular/core';
import {book} from "../book";
import {bookServiceService} from "../book-service.service";
import {switchMap} from "rxjs/operators";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers:[bookServiceService]
})
export class UpdateComponent implements OnInit {

  constructor(private bookServiceService:bookServiceService, private route:ActivatedRoute) {

  }
  newbook:book;
  ngOnInit():void {
  this.route.params.pipe(
    switchMap((params: Params) => {
  return this.bookServiceService.getSinglebook(params['bookid'])
})
)
.subscribe((newbook: book) => {
  this.newbook = newbook;
  this.pageContent.header.title = newbook.name;
  this.pageContent.header.body = "Details for selected book";
})
}
  public updateBook(bookid:String,newbook: book):void{
    this.bookServiceService.updtebook(bookid,newbook);
  }

  pageContent={
    header:{
      title:'Update the Book',
      body:''
    }
  }
}
