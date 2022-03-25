export class Book {
  _id?: string;
  title: string;
  author: string;
  category: string;
  ISBN: string;
  releaseDate: Date;
  publicationDate: Date;
  //  editorial: Editorial
  format: string;
  quantity: number;
  sells: number;
  description: string;

  constructor(
    title: string,
    author: string,
    category: string,
    ISBN: string,
    releaseDate: Date,
    publicationDate: Date,
    format: string,
    quantity: number,
    sells: number,
    description: string
  ) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.ISBN = ISBN;
    this.releaseDate = releaseDate;
    this.publicationDate = publicationDate;
    this.format = format;
    this.quantity = quantity;
    this.sells = sells;
    this.description = description;
  }
}
