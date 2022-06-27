import Dates from './dates';
import { User } from './user';

export interface Chat extends Dates {
  _id?: string;
  name: String;
  messages: string;
  users: User[];
}

export interface NewChatBody {
  name: String;
  userIds: string[];
}
