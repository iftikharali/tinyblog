import { Component, OnInit } from '@angular/core';
import { Blog } from '../Models/Blog';
import { BlogService } from '../BlogService/blog.service';
import SearchBlogRequest from 'src/app/Models/RequestModels/SearchBlogRequest';
@Component({
  selector: 'app-blog-get',
  templateUrl: './blog-get.component.html',
  styleUrls: ['./blog-get.component.css']
})
export class BlogGetComponent implements OnInit {
  constructor(private blogService:BlogService) { }
  CurrentPageNumber: number = 1;
  MaxPageNumber: number = 1;
  DisablePreviousButton: boolean = true;
  DisableNextButton: boolean = true;
  PageNumberButtons: (string|number)[] = [1];
  blogs: Blog[] = [];
  blogItems: Blog[] = [];
  blogRequest:SearchBlogRequest;

  
  GetPageNumberButton(){
    var subArray =[];
    var currentpage = this.CurrentPageNumber;
    if(this.MaxPageNumber<7){
      return Array.from(Array(this.MaxPageNumber).keys()).map(num=>{++num});
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
    this.blogService.getBlogs(this.blogRequest).subscribe(response =>
      {
        this.blogs = response;

        this.MaxPageNumber = Math.ceil(this.blogs.length/10);
        var Index = (this.CurrentPageNumber-1)*10;
        this.blogItems = this.blogs.slice(Index,Index+10);
        this.PageNumberButtons = this.GetPageNumberButton();
        if(this.blogs.length>10){
          this.DisableNextButton = false;
        }
        console.log(this.blogs);
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
    this.blogItems = this.blogs.slice(Index,Index+10);
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
    this.blogItems = this.blogs.slice(Index,Index+10);
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
  this.blogItems = this.blogs.slice(Index,Index+10);
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
