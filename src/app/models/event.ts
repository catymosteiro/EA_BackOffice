<<<<<<< HEAD
import { User } from "./user";

export class Event {
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

    constructor(name: string, description: string, admin: User, creationDate: Date, UsersList: User[], category: string, position: { type: { latitude: number, longitude: number; }} ){
        this.name = name;
        this.description = description;
        this.admin = admin;
        this.creationDate = creationDate;
        this.usersList = UsersList;
        this.category = category;
        this.position = position 
    }

}
=======
import Dates from './dates';
import { User } from './user';

export interface Events extends Dates {
  _id?: string;
  name: string;
  description: string;
  admin: User;
  eventDate?: Date;
  usersList: User[];
  category: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
>>>>>>> develop
