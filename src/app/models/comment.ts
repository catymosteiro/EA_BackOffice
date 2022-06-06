import Dates from './dates';
import { User } from './user';

export interface Comment extends Dates {
  _id?: string;
  user: User;
  title: string;
  text: string;
  type: string;
  users: string[];
  likes: number;
  dislikes: number;
}
