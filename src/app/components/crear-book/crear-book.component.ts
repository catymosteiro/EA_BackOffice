import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';


@Component({
  selector: 'app-crear-book',
  templateUrl: './crear-book.component.html',
  styleUrls: ['./crear-book.component.css'],
})
export class CrearBookComponent implements OnInit {
  bookForm: FormGroup;
  bookList: Book[] = [];
  title = 'Add Book';
  _id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _bookService: BookService,
    private aRouter: ActivatedRoute
  ) {
    this.bookForm = this.fb.group({
      title: [''],
      ISBN: [''],
      photoURL: [''],
      description: [''],
      publishedDate: [''],
      editorial: [''],
      rate: [''],
      categories: [''],
    });

    this._id = this.aRouter.snapshot.paramMap.get('_id');
    console.log(this._id);
  }

  ngOnInit(): void {
    this.editBook();
  }

  addBook() {
    const book: Book = {
      title: this.bookForm.get('title')?.value,
      ISBN: this.bookForm.get('ISBN')?.value,
      photoURL: this.bookForm.get('photoURL')?.value,
      description: this.bookForm.get('description')?.value,
      publishedDate: this.bookForm.get('publishedDate')?.value,
      editorial: this.bookForm.get('editorial')?.value,
      rate: this.bookForm.get('rate')?.value,
      categories: this.bookForm.get('categories')?.value,
    };

    if (this._id !== null) {
      // Edit book
      this._bookService.editBook(this._id, book).subscribe(
        (data) => {
          this.toastr.info('El book ha estat editat amb exit!', 'Book Editat');
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error);
          this.bookForm.reset();
        }
      );
    } else {
      // Add user
      console.log(book);
      this._bookService.addBook(book).subscribe(
        (data) => {
          this.toastr.success('El book ha estat creat amb exit!', 'Book Creat');
          this.router.navigate(['/listar-books']);
        },
        (error) => {
          console.log(error);
          this.bookForm.reset();
        }
      );
    }
  }

  editBook() {
    if (this._id !== null) {
      this.title = 'Edit book';
      this._bookService.getBook(this._id).subscribe((data) => {
        console.log(data);
        this.bookForm.setValue({
          title: data.title,
          ISBN: data.ISBN,
          photoURL: data.photoURL,
          description: data.description,
          publishedDate: data.publishedDate,
          editorial: data.editorial,
          rate: data.rate,
          categories: data.categories,
        });
      });
    }
  }
}
