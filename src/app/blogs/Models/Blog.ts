import User from 'src/app/Models/User';
import Tag from 'src/app/Models/Tag';
import { Recomend } from './Recommend';

export class Blog {
    BlogKey: number
    BlogGuid: string
    Title: string
    SubTitle: string
    MainContentImageUrl: string
    MainContentImageSubtitle: string
    MetaTag: {[Key: string]: string};
    BrowserTitle: string
    Owner: User
    Url: string
    SortUrl: string
    Content: string
    Tags: Array<Tag>[];
    IsActive:  boolean;
    Subscribers: Array<User>[];
    Votes: number;
    Recommends: Array<Recomend>[];
    CreatedAt: Date
    CreatedBy: User
    UpdatedAt: Date
    UpdatedBy: User
  }