import User from 'src/app/Models/User'
import Tag from 'src/app/Models/Tag';

export class Post {
    PostKey: number;
    PostGuid: string;
    Title: string;
    SubTitle: string;
    MetaTag: {[Key: string]: string};
    BrowserTitle: string;
    Author: User;
    Url: string;
    SortUrl: string;
    MainContentImageUrl: string;
    MainContentImageSubtitle: string;
    Excerpt: String;
    Content: String;
    IsPublished: boolean;
    IsActive: boolean;
    BlogID: Number;
    Views: Number;
    Votes: Number;
    Next:string;
    Previous:string;
    Tags: Array<Tag>[];
    CreatedAt: Date;
    CreatedBy: User;
    UpdatedAt: Date;
    UpdatedBy: User;
  }