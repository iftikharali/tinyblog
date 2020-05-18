import { Component, OnInit } from '@angular/core';
import { UsersService } from '../userService/users.service';
import { AuthenticationService } from '../userService/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  file:File;
  constructor(private service:UsersService, private userAuthenticationService:AuthenticationService, private route:ActivatedRoute, private router:Router) { }

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
      this.file = file;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.user.ImageUrl = reader.result as string;
   
      };
   
    }
  }

  public saveProfile(){
   
      //let fileToUpload = <File>files[0];
      const formData = new FormData();
      if(this.file){
        formData.append('file', this.file, this.file.name);
      }
      formData.append('ImageUrl',this.user.ImageUrl);
      formData.append('Name', this.user.Name);
      formData.append('Email', this.user.Email);
      formData.append('About', this.user.About);
      formData.append('Phone', this.user.Phone);
      formData.append('Website', this.user.Website);
      formData.append('UserKey',this.user.UserKey.toString());
      this.service.saveUserWithImage(formData);
   
      // this.http.post('https://localhost:5001/api/upload', formData, {reportProgress: true, observe: 'events'})
      //   .subscribe(event => {
      //     if (event.type === HttpEventType.UploadProgress)
      //       this.progress = Math.round(100 * event.loaded / event.total);
      //     else if (event.type === HttpEventType.Response) {
      //       this.message = 'Upload success.';
      //       this.onUploadFinished.emit(event.body);
      //     }
      //   });
    }
  
  cancelProfileEdit(){

  }
  DeleteProfile(){
    this.service.deleteUser(this.user.UserKey).subscribe(response => {
      this.userAuthenticationService.logout();
      this.router.navigate(['']);
    });
  }
}
