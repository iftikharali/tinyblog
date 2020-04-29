import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../userService/users.service';
import { AuthenticationService } from '../userService/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private authenticationService: AuthenticationService) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
        this.router.navigate(['/']);
    }
   }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  userLogin(){
    
    var Email: String = this.loginForm.controls["Email"].value;
    var Password: String = this.loginForm.controls["Password"].value;
    var user = this.authenticationService.login(Email,Password)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
           console.log(error);
            
        });
    console.log('logged in sucessfully');
  }

}
