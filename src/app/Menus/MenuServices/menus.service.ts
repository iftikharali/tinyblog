import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Menu from 'src/app/Models/Menu';
import { GlobalConstants } from 'src/app/Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor(private httpClient:HttpClient) { }

  getMenus():Observable<Menu[]>{
    return this.httpClient.get<Menu[]>(GlobalConstants.BASE_URL+ServiceUrls.MENU_LIST_GET);
  }

  formatMenu(Menus:Menu[]){
    
  }
}
