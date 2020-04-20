import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../userService/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.loginForm = this.fb.group({
       Email: ['', Validators.required],
       Password: ['', Validators.required]
     });
   }

  ngOnInit() {
  }

  userLogin(){
    
    var Email: String = this.loginForm.controls["Email"].value;
    var Password: String = this.loginForm.controls["Password"].value;
    var user = this.userService.loginUser(Email,Password);
    console.log('logged in sucessfully');
  }

}
