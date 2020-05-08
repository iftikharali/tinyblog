import { Component, OnInit } from '@angular/core';
import { UsersService } from '../userService/users.service';
import { AuthenticationService } from '../userService/authentication.service';
import { ActivatedRoute } from '@angular/router';
import User from 'src/app/Models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId:string;
  user:User;
  IsEditing:boolean;
  currentUser:User;
  constructor(private service:UsersService, private userAuthenticationService:AuthenticationService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.currentUser = this.userAuthenticationService.currentUserValue;
  this.userId = this.route.snapshot.paramMap.get("id");
  this.IsEditing = false;
    this.service.getUser(this.userId).subscribe(response => 
      {
        this.user = response;
        console.log(this.user);
      });
  }

  editUserProfile(){
    this.IsEditing = !this.IsEditing;
  }
  previewImage(event){
    console.log("image change");
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.user.ImageUrl = reader.result as string;
   
      };
   
    }
  }

  saveProfile(){

  }
  cancelProfileEdit(){

  }

}
