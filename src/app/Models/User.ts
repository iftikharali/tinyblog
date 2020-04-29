import Category from './Category';
import { Blog } from '../blogs/Models/Blog';

export default class User { 
  UserKey: number;
  UserGuid: string;
  UserID: string;
  Name: string;
  DateOfBirth: Date;
  Email: string;
  Password: string;
  Phone: string;
  Website: string;
  About: string;
  Categories: Array<Category>;
  ImageUrl: string;
  IsActive: boolean;
  Vote: number;
  DateOfJoining: Date;
  LastActive: Date;
  BlogsCount: number;
  PostsCount: number;
  Token: string;
  Comments: Array<Comment>;
  CreatedAt: Date;
  CreatedBy: User;
  UpdatedAt: Date;
  UpdatedBy: User;
  }