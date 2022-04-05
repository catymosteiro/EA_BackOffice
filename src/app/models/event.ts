import Dates from './dates';
import { User } from './user';

export interface Events extends Dates {
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
}
