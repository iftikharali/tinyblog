import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private client: HttpClient) { }

  ServiceURI = 'http://localhost:54611/api';

  addUser(Name,Phone, Email,Password,DateOfBirth){
    const UserObject ={
      Name,
      Phone,
      Email,
      Password,
      DateOfBirth
    };

    this.client.post(this.ServiceURI+'/users',UserObject)
      .subscribe(result => console.log('User posted successfully'));
  }
}