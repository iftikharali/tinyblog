import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {GlobalConstants} from '../../Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private client: HttpClient) { }

  addUser(Name,Phone, Email,Password,DateOfBirth){
    const UserObject ={
      Name,
      Phone,
      Email,
      Password,
      DateOfBirth
    };

    this.client.post(GlobalConstants.BASE_URL+ServiceUrls.USER_LIST_GET,UserObject)
      .subscribe(result => console.log('User posted successfully'));
  }

  loginUser(UserName,Password){
    const UserLoginObject = {
      UserName,
      Password
    }
    this.client.post(GlobalConstants.BASE_URL+ServiceUrls.USER_LOGIN,UserLoginObject)
    .subscribe(result =>
      {
        console.log('user logged in with token: ');
        console.log(result);
      })
  }

  logoutUser(){
    this.client.get(GlobalConstants.BASE_URL+ServiceUrls.USER_LOGOUT)
    .subscribe(response =>
      {
        console.log('user logged out successfully');
      })
  }
}
