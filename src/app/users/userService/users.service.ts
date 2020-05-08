import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {GlobalConstants} from '../../Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';
import User from 'src/app/Models/User';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser:User;
  constructor(private client: HttpClient, private authenticationService:AuthenticationService) { 
    
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    console.log(this.currentUser);
  }

  addUser(Name,Phone, Email,Password,DateOfBirth){
    const UserObject ={
      Name,
      Phone,
      Email,
      Password,
      DateOfBirth
    };

    this.client.post(GlobalConstants.BASE_URL+ServiceUrls.USER_GET,UserObject)
      .subscribe(result => console.log('User posted successfully'));
  }
  getUser(UserId):Observable<User>{
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'Authorization': 'Bearer '+this.currentUser.Token
    //   })
    // };
    return this.client.get<User>(GlobalConstants.BASE_URL+ServiceUrls.USER_GET+UserId);
  }


}
