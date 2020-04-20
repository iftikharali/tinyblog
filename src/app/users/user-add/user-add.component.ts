import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../userService/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  angForm: FormGroup;
  searchForm: FormGroup;
  constructor(private fb: FormBuilder, private us: UsersService) {
    this.createForm();
   }

   createForm(){
     this.angForm = this.fb.group({
      Name: ['', Validators.required],
       Phone: [''],
       Email: ['', Validators.required],
       Password: ['', Validators.required],
       DateOfBirth: ['', Validators.required]
     });
   }

   addUser(){
    var Name: String = this.angForm.controls["Name"].value;
     var Phone: String = this.angForm.controls["Phone"].value;
     var Email: String = this.angForm.controls["Email"].value;
     var Password: String = this.angForm.controls["Password"].value;
     var DateOfBirth: Date = this.angForm.controls["DateOfBirth"].value;
     this.addUsers(Name,Phone, Email, Password, DateOfBirth);
   }
   addUsers(Name, Phone, Email, Password, DateOfBirth){
     this.us.addUser(Name, Phone, Email, Password, DateOfBirth);
   }
  ngOnInit() {
  }

}
