import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-listar-book',
  templateUrl: './listar-book.component.html',
  styleUrls: ['./listar-book.component.css']
})
export class ListarBookComponent implements OnInit {

  listBooks: Book[] = [];

  constructor(private _bookService: BookService,
        private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this._bookService.getBooks().subscribe((data: any) => {
      console.log(data);
      this.listBooks = data;
    }, (error: any) => {
      console.log(error);
    })
  }

  deleteBook(ISBN: string) {
    this._bookService.deleteBook(ISBN).subscribe((data: any) => {
      this.toastr.error('The book has been delated', 'Book delated');
      this.getBooks();
    }, (error: any) => {
      console.log(error);
    })
  }
}
