import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from '@angular/common/http';
import SearchPostRequest from 'src/app/Models/RequestModels/SearchPostRequest';
import { GlobalConstants } from 'src/app/Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';
import { Utility } from 'src/app/Utilities/Utility';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private client: HttpClient) { }

  getPost(request: SearchPostRequest):Observable<Post[]>
  {
    return this.client.get<Post[]>(GlobalConstants.BASE_URL+ServiceUrls.POST_LIST_GET+'?'+Utility.constructObjectURL(request));
  }
}
