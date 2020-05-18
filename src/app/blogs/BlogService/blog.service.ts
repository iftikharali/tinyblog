import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalConstants } from 'src/app/Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';
import { Observable } from 'rxjs';
import { Blog } from '../Models/Blog';
import SearchBlogRequest from 'src/app/Models/RequestModels/SearchBlogRequest';
import { Utility } from 'src/app/Utilities/Utility';
import { AuthenticationService } from 'src/app/users/userService/authentication.service';
import { BlogEditorRequest } from 'src/app/editor/editor.model';
import Tag from 'src/app/Models/Tag';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  getUsersBlogList():Observable<Blog[]> {
    let blogRequest = new SearchBlogRequest();
    blogRequest.CreatedBy = this.authenticationService.currentUserValue.UserKey;
    return this.httpClient.get<Blog[]>(GlobalConstants.BASE_URL+ServiceUrls.BLOG_LIST_GET+'?'+Utility.constructObjectURL(blogRequest));
  }
  constructor(private httpClient:HttpClient, private authenticationService:AuthenticationService) { }
  getBlog(BlogKey:string):Observable<Blog>
  {
      return this.httpClient.get<Blog>(GlobalConstants.BASE_URL+ServiceUrls.BLOG_GET+BlogKey);
  }
  getBlogs(blogRequest:SearchBlogRequest):Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(GlobalConstants.BASE_URL+ServiceUrls.BLOG_LIST_GET+'?'+Utility.constructObjectURL(blogRequest));
  }

  save(blogRequest:BlogEditorRequest):Observable<any>{
    const formData = new FormData();
      if(blogRequest.imageContent){
        formData.append('file', blogRequest.imageContent, blogRequest.imageContent.name);
      }
      formData.append("Title",blogRequest.title);
      formData.append("content",blogRequest.HtmlContent);
      formData.append("SubTitle",blogRequest.subTitle);
      formData.append("MainContentImageSubtitle",blogRequest.imageContentSubtitle);
      formData.append("Tags",blogRequest.tags);

    return this.httpClient.post<any>(GlobalConstants.BASE_URL+ServiceUrls.BLOG_SAVE,formData);
  }

  SubscribeUser(BlogKey):Observable<any>{
    return this.httpClient.post<any>(GlobalConstants.BASE_URL+ServiceUrls.BLOG_SEUBSCRIBE,BlogKey);
  }

  Recommend(BlogKey):Observable<any>{
    return this.httpClient.post<any>(GlobalConstants.BASE_URL+ServiceUrls.BLOG_RECOMMEND,BlogKey);
  }
}
