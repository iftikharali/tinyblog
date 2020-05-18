import User from 'src/app/Models/User';
import Tag from 'src/app/Models/Tag';

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
    Tags: Tag[];
    IsActive:  boolean;
    Subscribers: Array<User>[];
    Votes: number;
    SubscriberCount:number;
    Recommend: number;
    CreatedAt: Date
    CreatedBy: User
    UpdatedAt: Date
    UpdatedBy: User
  }