import { Component, OnInit } from '@angular/core';
import {book} from "../book";
import {bookServiceService} from "../book-service.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[bookServiceService]
})
export class CreateComponent implements OnInit {
  public newbook: { name: string; type: string;image: string;summary;price:string; }= {
    name: '',
    type:'',
    image:'',
    summary:'',
    price:'',
  };

  constructor(private bookServiceService:bookServiceService,public router:Router) { }

  ngOnInit(){
  }
  public createNewbook(newbook: book):void{
    this.bookServiceService.createbook(newbook);
    this.router.navigate(['']);
  }

}
