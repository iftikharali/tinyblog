import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../userService/users.service';
import User from 'src/app/Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  angForm: FormGroup;
  searchForm: FormGroup;
  user:User;
  
  constructor(private fb: FormBuilder, private us: UsersService,private router:Router) {
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
     this.user = new User();
     this.user.Name = Name;
     this.user.Phone = Phone;
     this.user.Email = Email;
     this.user.Password = Password;
     this.user.DateOfBirth = DateOfBirth;
     this.us.addUser(this.user).subscribe(response =>{
       this.router.navigate(["/user/login"]);
     });
   }
  ngOnInit() {
  }

}
