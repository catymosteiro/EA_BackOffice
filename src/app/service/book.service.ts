import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  url = environment.API_URL;

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + '/book');
  }

  getBook(_id: string): Observable<Book> {
    return this.http.get<Book>(this.url + '/book/' + _id);
  }

  deleteBook(id: string): Observable<string> {
    return this.http.delete(this.url + '/book/' + id, { responseType: 'text' });
  }

  addBook(book: Book): Observable<string> {
    return this.http.post(this.url + '/book', book, { responseType: 'text' });
  }

  editBook(id: string, book: Book): Observable<string> {
    return this.http.put(this.url + '/book/' + id, book, {
      responseType: 'text',
    });
  }
}
