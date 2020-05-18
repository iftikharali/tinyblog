import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { BlogService } from '../blogs/BlogService/blog.service';
import { PostService } from '../posts/PostService/post.service';
import { Blog } from '../blogs/Models/Blog';
import { Post } from '../posts/models/Post';
import { BlogEditorRequest } from './editor.model';
import Category from '../Models/Category';
import { CategoryService } from '../categories/CategoryService/category.service';
import SearchPostRequest from '../Models/RequestModels/SearchPostRequest';
import { AuthenticationService } from '../users/userService/authentication.service';

@Component({
  selector: 'blog-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() public IsBlog:boolean = false;
  @Output() public editorEvent = new EventEmitter();
  service:BlogService|PostService;
  constructor(private authenticationService:AuthenticationService, private blogService:BlogService,private postService:PostService, private categoryService:CategoryService) {

   }
  HtmlContent:string;
  tags:string ;
  subTitle:string;
  title:string;
  imageContentSubtitle:string;
  imageContent:string;
  image:File;
  blogId:number;
  blogList:Blog[];
  posts:Post[];
  CategoryId:number;
  categories:Category[];
  PreviousPostUrl:string;
  NextPostUrl:string;
  postSearchRequest:SearchPostRequest;
  ngOnInit() {
    if(this.IsBlog){
      this.service = this.blogService;
    }else{
      this.service = this.postService;
      
      this.service.getPostsbyuser(this.authenticationService.currentUserValue.UserKey).subscribe(response => {
        this.posts = response;
      });
    }
    if(this.IsBlog){
      this.blogService.getUsersBlogList().subscribe(response => {
        this.blogList = response;
      });
      this.categoryService.getCategories().subscribe(response => {
        this.categories = response;
      });
    }else{
      this.blogService.getUsersBlogList().subscribe(response => {
        this.blogList = response;
      });
    }
  }
  previewImage(event){
    const reader = new FileReader();
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.image = file;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageContent = reader.result as string;
      };
   
    }
  }

  triggerEvent(){

  }
Save(){
    var request = new BlogEditorRequest();
    request.blogId = this.blogId;
    request.HtmlContent = this.HtmlContent;
    request.tags = this.tags;
    request.subTitle = this.subTitle;
    request.title = this.title;
    request.imageContentSubtitle = this.imageContentSubtitle;
    request.imageContent = this.image;
    request.blogId = this.blogId;
    request.categoryId = this.CategoryId;
    request.Previous = this.PreviousPostUrl;
    request.Next = this.NextPostUrl;
    this.service.save(request).subscribe(response => {
      console.log(response);
    });
}
}
