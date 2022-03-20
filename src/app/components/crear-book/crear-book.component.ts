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
  styleUrls: ['./crear-book.component.css']
})
export class CrearBookComponent implements OnInit {
  bookForm: FormGroup;
  title = "Add Book";
  name: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _bookService: BookService,
              private aRouter: ActivatedRoute) { 
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      ISBN: ['', Validators.required],
      releaseDate: ['', Validators.required],
      publicationDate: ['', Validators.required],
      format: ['', Validators.required],
      quantity: ['', Validators.required],
      sells: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.name = this.aRouter.snapshot.paramMap.get('name');
    console.log(this.name);
  }

  ngOnInit(): void {
    this.editBook();
  }

  addBook() {
    const book: Book = {
      title: this.bookForm.get('title')?.value,
      category: this.bookForm.get('category')?.value,
      ISBN: this.bookForm.get('ISBN')?.value,
      releaseDate: this.bookForm.get('releaseDate')?.value,
      publicationDate: this.bookForm.get('releaseDate')?.value,
      format: this.bookForm.get('format')?.value,
      quantity: this.bookForm.get('quantity')?.value,
      sells: this.bookForm.get('sells')?.value,
      description: this.bookForm.get('description')?.value,
    }

    if(this.name !== null){
      // Edit book
      this._bookService.editBook(this.name, book).subscribe((data: any) => {
        this.toastr.info('The book is updated!', 'Book Updated');
        this.router.navigate(['/']);
      }, (error: any) => {
        console.log(error);
        this.bookForm.reset();
      })
    }
    else {
      // Add book
      console.log(book);
      this._bookService.addBook(book).subscribe((data: any) => {
        this.toastr.success('The book is added!', 'Book Added');
        this.router.navigate(['/']);
      }, (error: any) => {
        console.log(error);
        this.bookForm.reset();
      })
    }
  }

  editBook() {
    if(this.name !== null) {
      this.title = 'Edit Book';
      this._bookService.getBook(this.name).subscribe((data: { title: any; category: any; ISBN: any; releaseDate: any; publicationDate: any; format: any; quantity: any; sells: any; description: any; }) => {
        this.bookForm.setValue({
          title: data.title,
          category:data.category,
          ISBN:data.ISBN,
          releaseDate: data.releaseDate,
          publicationDate: data.publicationDate,
          format:data.format,
          quantity:data.quantity,
          sells: data.sells,
          description:data.description,
        })
      })
    }
  }

}

