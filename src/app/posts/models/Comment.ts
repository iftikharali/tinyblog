import { Post } from './Post';
import User from 'src/app/Models/User';

export class Comment {
    CommentKey: number
    CommentGuid: string
    ParentComment: Comment
    Content: string;
    Post: Post
    CreatedAt: Date 
    CreatedBy: User
    UpdatedAt: Date
    UpdatedBy: User
}