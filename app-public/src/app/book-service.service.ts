import { Injectable } from '@angular/core';
import {book} from './book';
import {Http, Response} from "@angular/http";

@Injectable({
  providedIn: 'root'
})

export class bookServiceService {

  private booksUrl = 'http://localhost:3000/api/books';

  getSinglebook(bookId:String): Promise<void | book>{
    return this.http.get(this.booksUrl + '/'+bookId)
      .toPromise()
      .then(response => response.json() as book)
      .catch(this.handleError);
  }
  createbook(newbook:book): Promise<void | book>{
    return this.http.post(this.booksUrl,newbook)
      .toPromise()
      .then(response=> response.json() as book)
      .catch(this.handleError);
  }
  updtebook(bookId:String,newbook:book):Promise<void |book>{
    return this.http.put(this.booksUrl+'/'+bookId,newbook)
      .toPromise()
      .then(response=>response.json()as book)
      .catch(this.handleError);
  }
  deletebook(bookId:String):Promise<void |book>{
    return this.http.delete(this.booksUrl+'/'+bookId)
      .toPromise()
      .then(response=>response.json() as book)
      .catch(this.handleError)
  }

  constructor(private http: Http) { }
  // get("/api/books")
  getbooks():Promise<void | book[]>{

    return this.http.get(this.booksUrl)
      .toPromise()
      .then(response => response.json() as book[])
      .catch(this.handleError);
  }

  private handleError(error: any){
    console.log("error");
  }
}
