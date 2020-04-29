import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import SearchPostRequest from 'src/app/Models/RequestModels/SearchPostRequest';
import { GlobalConstants } from 'src/app/Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';
import { Utility } from 'src/app/Utilities/Utility';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';
import { Comment } from '../models/Comment';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private client: HttpClient) { }

  getPosts(request: SearchPostRequest):Observable<Post[]>
  {
    return this.client.get<Post[]>(GlobalConstants.BASE_URL+ServiceUrls.POST_LIST_GET+'?'+Utility.constructObjectURL(request));
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
}
