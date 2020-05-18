import Category from './Category';

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
  ProfileUrl: string;
  IsActive: boolean;
  Vote: number;
  DateOfJoining: Date;
  LastActive: Date;
  BlogCount: number;
  PostCount: number;
  Token: string;
  Comments: Array<Comment>;
  CreatedAt: Date;
  CreatedBy: User;
  UpdatedAt: Date;
  UpdatedBy: User;
  }