import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { BlogService } from '../blogs/BlogService/blog.service';
import { PostService } from '../posts/PostService/post.service';
import { Blog } from '../blogs/Models/Blog';
import { Post } from '../posts/models/Post';
import { BlogEditorRequest } from './editor.model';

@Component({
  selector: 'blog-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() public IsBlog:boolean = false;
  @Output() public editorEvent = new EventEmitter();
  service:BlogService|PostService;
  constructor(private blogService:BlogService,private postService:PostService) {

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
  ngOnInit() {
    if(this.IsBlog){
      this.service = this.blogService;
    }else{
      this.service = this.postService;
    }
    if(this.IsBlog){
      this.blogService.getUsersBlogList().subscribe(response => {
        this.blogList = response;
      });
    }else{
      this.blogService.getUsersBlogList().subscribe(response => {
        this.blogList = response;
        console.log(response);
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
    this.service.save(request).subscribe(response => {
      console.log(response);
    });
}
}
