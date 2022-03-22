import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + '/book');
  }

  deleteBook(ISBN: string): Observable<string> {
    return this.http.delete(this.url + '/book/' + ISBN, {responseType: 'text'})
  }

  addBook(book: Book): Observable<string> {
    return this.http.post(this.url + '/book', book, {responseType: 'text'}) ;
  }

  getBook(name: string): Observable<Book> {
    return this.http.get<Book>(this.url + '/book/' + name);
  }

  editBook(name: string, book: Book): Observable<string> {
    return this.http.put(this.url + '/book/' + name, book, {responseType: 'text'});
  }
}
