import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../userService/authentication.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(private router: Router, private authService:AuthenticationService) { }

  ngOnInit() {
    console.log("user logged out successfully");
    this.authService.logout();
    this.router.navigate(['']);
  }

}
