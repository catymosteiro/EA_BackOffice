import Dates from './dates';

export interface Book extends Dates {
  _id?: string;
  title: string;
  ISBN: string;
  writer: String;
  photoURL: string;
  description: string;
  publishedDate: Date;
  editorial: string;
  rate: number;
  category: string;
  //comments: Comment[];
}
