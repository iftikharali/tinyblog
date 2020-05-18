import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import SearchPostRequest from 'src/app/Models/RequestModels/SearchPostRequest';
import { GlobalConstants } from 'src/app/Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';
import { Utility } from 'src/app/Utilities/Utility';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';
import { BlogEditorRequest } from 'src/app/editor/editor.model';



@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(private client: HttpClient) { }

  getPosts(request: SearchPostRequest):Observable<Post[]>
  {
    return this.client.get<Post[]>(GlobalConstants.BASE_URL+ServiceUrls.POST_LIST_GET+'?'+Utility.constructObjectURL(request));
  }
  getPostsbyuser(UserKey:number):Observable<Post[]> {
    return this.client.get<Post[]>(GlobalConstants.BASE_URL+ServiceUrls.POST_LIST_GET_BY_USER(UserKey));
  }
  getPost(PostKey):Observable<Post>{
    return this.client.get<Post>(GlobalConstants.BASE_URL+ServiceUrls.POST_GET+PostKey);
  }
  getRecommendedPost(request: SearchPostRequest):Observable<Post[]>
  {
    return this.client.get<Post[]>(GlobalConstants.BASE_URL+ServiceUrls.POST_LIST_GET+'?'+Utility.constructObjectURL(request));
  }
  getComments(postKey:number):Observable<Comment[]>
  {
    return this.client.get<Comment[]>(GlobalConstants.BASE_URL+ServiceUrls.COMMENT_LIST_GET(postKey))
  }
  save(postRequest:BlogEditorRequest):Observable<any>{
    const formData = new FormData();
      if(postRequest.imageContent){
        formData.append('file', postRequest.imageContent, postRequest.imageContent.name);
      }
      formData.append("BlogKey",postRequest.blogId.toString());
      formData.append("Title",postRequest.title);
      formData.append("content",postRequest.HtmlContent);
      formData.append("SubTitle",postRequest.subTitle);
      formData.append("MainContentImageSubtitle",postRequest.imageContentSubtitle);
      formData.append("Tags",postRequest.tags);
      formData.append("Previous",postRequest.Previous);
      formData.append("Next",postRequest.Next);

    return this.client.post<any>(GlobalConstants.BASE_URL+ServiceUrls.POST_SAVE,formData);
  }
  createComment(Content,PostKey):Observable<Comment>{
    let comment = new Comment();
    comment.Content = Content;
    return this.client.post<Comment>(GlobalConstants.BASE_URL+"post/"+PostKey+"/"+ServiceUrls.COMMENT_SAVE,comment);
  }
  vote(postKey):Observable<any>{
    return this.client.post<any>(GlobalConstants.BASE_URL+ServiceUrls.VOTE_POST(postKey),{});
  }
}
