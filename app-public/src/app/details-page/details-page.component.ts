import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {bookServiceService} from "../book-service.service";
import {book} from "../book";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers:[bookServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private bookServiceService: bookServiceService, private route:ActivatedRoute) { }
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
  public deletebook(bookid:String):void{
    this.bookServiceService.deletebook(bookid);
  }

  pageContent={
    header:{
      title:'',
      body:''
    }
  };

}
