<<<<<<< HEAD
import { ThisReceiver } from "@angular/compiler";


export class Book {
=======
import Dates from './dates';

export interface Book extends Dates {
  _id?: string;
>>>>>>> develop
  title: string;
  ISBN: string;
  writer: String;
  photoURL: string;
  description: string;
<<<<<<< HEAD


  constructor (title: string, author: string, category: string,   ISBN: string, releaseDate: Date, publicationDate: Date, format: string, quantity: number, sells: number, description: string ){
    this.title = title;
    this.author=author;
    this.category = category;
    this.ISBN= ISBN;
    this.releaseDate=releaseDate;
    this.publicationDate=publicationDate;
    this.format=format;
    this.quantity=quantity;
    this.sells=sells;
    this.description=description
  }
=======
  publishedDate: Date;
  editorial: string;
  rate: number;
  category: string;
  //comments: Comment[];
>>>>>>> develop
}

