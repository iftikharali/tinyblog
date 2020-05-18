import User from 'src/app/Models/User'
import Tag from 'src/app/Models/Tag';
import { Blog } from 'src/app/blogs/Models/Blog';

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
    Blog: Blog;
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