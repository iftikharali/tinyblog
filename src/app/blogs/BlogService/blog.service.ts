import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';
import { Observable } from 'rxjs';
import { Blog } from '../Models/Blog';
import SearchBlogRequest from 'src/app/Models/RequestModels/SearchBlogRequest';
import { Utility } from 'src/app/Utilities/Utility';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private httpClient:HttpClient) { }
  getBlog(BlogKey:string):Observable<Blog>
  {
      return this.httpClient.get<Blog>(GlobalConstants.BASE_URL+ServiceUrls.BLOG_GET+BlogKey);
  }
  getBlogs(blogRequest:SearchBlogRequest):Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(GlobalConstants.BASE_URL+ServiceUrls.BLOG_LIST_GET+'?'+Utility.constructObjectURL(blogRequest));
  }
}
