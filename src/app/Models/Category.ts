import User from './User';

export default class Category{
    ID: number
    Name: string
    Description: string
    PostCount: number;
    CreatedAt: Date
    CreatedBy: User
    UpdatedAt: Date
    UpdatedBy: User
}