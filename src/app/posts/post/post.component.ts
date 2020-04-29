import { Component, OnInit } from '@angular/core';
import { PostService } from '../PostService/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/Post';
import User from 'src/app/Models/User';
import SearchPostRequest from 'src/app/Models/RequestModels/SearchPostRequest';
import { Comment } from '../models/Comment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:Post = <Post>{};
  recommendedPosts:Post[] = [];
  request:SearchPostRequest;
  comments:Comment[] =[];
  commentsItem:Comment[]=[];
  commentLoaded = 0;
  IsCommentLoaded:boolean = false;
  commentAvailableInBuffer:boolean = false;
  constructor(private service:PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getPost(this.route.snapshot.paramMap.get('id')).subscribe(response=>
      {
        this.post = response;
      });
    this.service.getRecommendedPost(this.request).subscribe(response =>
      {
        this.recommendedPosts = response.slice(1,5);
      });
  }
  loadComment(PostKey){
    if(this.IsCommentLoaded){ return};
    this.service.getComments(PostKey).subscribe(response =>
      {
        this.comments = response;
        this.commentsItem = this.comments.slice(0,this.commentLoaded+10);
        this.commentLoaded+=10;
        if(this.commentLoaded<=this.comments.length){
          this.commentAvailableInBuffer = true;
        }else {
          this.commentAvailableInBuffer = false;
        }
        this.IsCommentLoaded = true;
        console.log('loaded');
      });
  }
  loadMoreComment(){
    
    console.log('load more comment');
    if(this.commentAvailableInBuffer){
      this.commentsItem = this.comments.slice(0,this.commentLoaded+10);
      this.commentLoaded+=10;
      if(this.commentLoaded<=this.comments.length){
        this.commentAvailableInBuffer = true;
      }else {
        this.commentAvailableInBuffer = false;
      }
    }
  }

}
