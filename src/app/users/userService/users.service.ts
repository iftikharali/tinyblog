import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {GlobalConstants} from '../../Constants/GlobalConstants';
import { ServiceUrls } from 'src/app/Constants/ServiceUrls';
import User from 'src/app/Models/User';


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


}
