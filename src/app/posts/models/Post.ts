import User from 'src/app/Models/User'
import Tag from 'src/app/Models/Tag';

export interface Post {
    ID: Number,
    Title: String,
    MetaTag: {[Key: string]: string},
    BrowserTitle: string,
    Author: User,
    Url: string,
    SortUrl: string,
    MainContentImageUrl: string,
    MainContentImageSubtitle: string,
    Excerpt: String,
    Content: String,
    IsPublished: boolean,
    IsActive: boolean,
    BlogID: Number,
    Views: Number,
    Votes: Number,
    Tags: Array<Tag>[],
    CreatedAt: Date,
    CreatedBy: User,
    UpdatedAt: Date,
    UpdatedBy: User
  }