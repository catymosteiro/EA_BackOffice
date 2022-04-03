import { User } from './user';

export class Events {
  _id?: string;
  name: string;
  description: string;
  admin: User;
  creationDate: Date;
  usersList: User[];
  category: string;
  position: {
    type: {
      latitude: number;
      longitude: number;
    };
  };

  constructor(
    name: string,
    description: string,
    admin: User,
    creationDate: Date,
    UsersList: User[],
    category: string,
    position: { type: { latitude: number; longitude: number } }
  ) {
    this.name = name;
    this.description = description;
    this.admin = admin;
    this.creationDate = creationDate;
    this.usersList = UsersList;
    this.category = category;
    this.position = position;
  }
}
