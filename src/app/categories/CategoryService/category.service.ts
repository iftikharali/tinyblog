import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Category from 'src/app/Models/Category';
import { Observable } from 'rxjs';
import { GlobalConstants } from 'src/app/Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  SaveCategory(Name,Description):Observable<Category>{
    let Category ={
      Description,
      Name
    };

   return this.httpClient.post<Category>(GlobalConstants.BASE_URL+ServiceUrls.CATEGORY_SAVE,Category);
  }

  getCategory(CategoryId):Observable<Category>{
    return this.httpClient.get<Category>(GlobalConstants.BASE_URL+ServiceUrls.CATEGORY_GET(CategoryId));

  }

  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>(GlobalConstants.BASE_URL+ServiceUrls.CATEGORY_LIST_GET);
  }
}
