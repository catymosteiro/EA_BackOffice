import { User } from './user';

export interface Club {
  _id?: string;
  name: string;
  description: string;
  admin: User;
  users: User[];
  createdAt: Number;
  category: string; //TODO-JA: change category for an object
}
