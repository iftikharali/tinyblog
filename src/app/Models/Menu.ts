import User from './User';

export default class Menu{
    CategoryKey: number;
    CategoryGuid: string;
    Name: string;
    Description: string;
    Link: string;
    IsEnable: boolean;
    IsActive: boolean;
    CreatedAt: Date;
    CreatedBy: User;
    UpdatedAt: Date;
    UpdatedBy: User;
}