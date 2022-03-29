import Dates from './dates';

export interface Book {
  _id?: string;
  title: string;
  ISBN: string;
  //writer: Writer;
  photoURL: string [];
  description: string;
  publishedDate: Date;
  editorial: string;
  rate : number;
  categories: string[];
  //comments: Comment[];

}
