import { Component, OnInit } from '@angular/core';
import { BlogService } from '../BlogService/blog.service';
import { PostService } from 'src/app/posts/PostService/post.service';
import SearchBlogRequest from 'src/app/Models/RequestModels/SearchBlogRequest';
import SearchPostRequest from 'src/app/Models/RequestModels/SearchPostRequest';
import { Blog } from '../Models/Blog';
import { Post } from 'src/app/posts/models/Post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogRequest:SearchBlogRequest;
  postRequest:SearchPostRequest;
  blog:Blog = <Blog>{};
  posts: Post[] =[]
  constructor(private blogService:BlogService, private postService: PostService, private route:ActivatedRoute) { }
  
  CurrentPageNumber: number = 1;
  MaxPageNumber: number = 1;
  DisablePreviousButton: boolean = true;
  DisableNextButton: boolean = true;
  postItem: Post[] = [];
  PageNumberButtons: (string|number)[] = [1];

  GetPageNumberButton(){
      var subArray =[];
      var currentpage = this.CurrentPageNumber;
      if(this.MaxPageNumber<7){
        return Array.from(Array(this.MaxPageNumber).keys()).map(num=>{return ++num});
      }else{
        if(currentpage<4){
          subArray.push(1);
          subArray.push(2);
          subArray.push(3);
          subArray.push(4);
          subArray.push("...");
          subArray.push(this.MaxPageNumber);
          return subArray;
        }else if(currentpage>this.MaxPageNumber-4){
          subArray.push(1);
          subArray.push("...");
          subArray.push(this.MaxPageNumber-3);
          subArray.push(this.MaxPageNumber-2);
          subArray.push(this.MaxPageNumber-1);
          subArray.push(this.MaxPageNumber);
          return subArray;
        }else{
          subArray.push(1);
          subArray.push("...");
          subArray.push(currentpage-2);
          subArray.push(currentpage-1);
          subArray.push(currentpage);
          subArray.push(currentpage+1);
          subArray.push(currentpage+2);
          subArray.push("...");
          subArray.push(this.MaxPageNumber);
          return subArray;
        }
      }

  }

  ngOnInit() {
    this.blogService.getBlog(this.route.snapshot.paramMap.get('id')).subscribe(response => 
      {
        this.blog = response;
        console.log(this.blog);
      });
    this.postService.getPosts(this.postRequest).subscribe(response =>
      {
        this.posts = response;
        this.MaxPageNumber = Math.ceil(this.posts.length/10);
        var Index = (this.CurrentPageNumber-1)*10;
        this.postItem = this.posts.slice(Index,Index+10);
        this.PageNumberButtons = this.GetPageNumberButton();
        if(this.posts.length>10){
          this.DisableNextButton = false;
        }
      });
  }


  GoToPage(PageNumber){
        if(PageNumber=="..."){
          return;
        }
        this.DisableNextButton = false;
        this.DisablePreviousButton = false;
        this.CurrentPageNumber = PageNumber;
        var Index = (this.CurrentPageNumber-1)*10;
        this.postItem = this.posts.slice(Index,Index+10);
        if(this.CurrentPageNumber>=this.MaxPageNumber){
          this.DisableNextButton = true;
        }
        if(this.CurrentPageNumber<=1){
          this.DisablePreviousButton = true;
        }
        this.PageNumberButtons = this.GetPageNumberButton();
  }
  nextPage(){
      if(this.CurrentPageNumber<this.MaxPageNumber){
        this.DisableNextButton = false;
        this.DisablePreviousButton = false;
        this.CurrentPageNumber++;
        var Index = (this.CurrentPageNumber-1)*10;
        this.postItem = this.posts.slice(Index,Index+10);
        if(this.CurrentPageNumber>=this.MaxPageNumber){
          this.DisableNextButton = true;
        }
      }
      this.PageNumberButtons = this.GetPageNumberButton();
  }

  previousPage(){
    if(this.CurrentPageNumber>1){
      this.DisablePreviousButton = false;
      this.DisableNextButton = false;
      this.CurrentPageNumber--;
      var Index = (this.CurrentPageNumber-1)*10;
      this.postItem = this.posts.slice(Index,Index+10);
      if(this.CurrentPageNumber<=1){
        this.DisablePreviousButton = true;
      }
    }
    this.PageNumberButtons = this.GetPageNumberButton();
  }

  IsActivePageNumber(PageNumber){
    if(PageNumber==this.CurrentPageNumber){
      return true;
    }else{
      return false;
    }
  }
  IsPageNumberDots(PageNumber){
    if(PageNumber=="..."){
      return true;
    }else{
      return false;
    }
  }


}
