import { Comment } from './comment';
import { User } from "./user";

export interface Coach {
  id: string;
  user: User;
  bannerImage?: string;
  description: string;
  speciality: string;
  comment?: Comment[];
  star?: number;
}
