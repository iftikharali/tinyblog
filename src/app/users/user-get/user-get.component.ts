import { Component, OnInit } from '@angular/core';
import User from 'src/app/Models/User';
import { UsersService } from '../userService/users.service';


@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {
  users:User[]=[];
  constructor(private userService:UsersService) { }
  CurrentPageNumber: number = 1;
  MaxPageNumber: number = 1;
  DisablePreviousButton: boolean = true;
  DisableNextButton: boolean = true;
  PageNumberButtons: (string|number)[] = [1];
  userItems: User[] = [];

  
  GetPageNumberButton(){
    var subArray =[];
    var currentpage = this.CurrentPageNumber;
    if(this.MaxPageNumber<7){
      return Array.from(Array(this.MaxPageNumber).keys()).map(num=>{return ++num});
    }else{
      if(currentpage<4){
        subArray.push(1);
        subArray.push(2);
        subArray.push(3);
        subArray.push(4);
        subArray.push("...");
        subArray.push(this.MaxPageNumber);
        return subArray;
      }else if(currentpage>this.MaxPageNumber-4){
        subArray.push(1);
        subArray.push("...");
        subArray.push(this.MaxPageNumber-3);
        subArray.push(this.MaxPageNumber-2);
        subArray.push(this.MaxPageNumber-1);
        subArray.push(this.MaxPageNumber);
        return subArray;
      }else{
        subArray.push(1);
        subArray.push("...");
        subArray.push(currentpage-2);
        subArray.push(currentpage-1);
        subArray.push(currentpage);
        subArray.push(currentpage+1);
        subArray.push(currentpage+2);
        subArray.push("...");
        subArray.push(this.MaxPageNumber);
        return subArray;
      }
    }

}


  ngOnInit() {
    this.userService.getUsers().subscribe(response =>
      {
        this.users = response;

        this.MaxPageNumber = Math.ceil(this.users.length/10);
        var Index = (this.CurrentPageNumber-1)*10;
        this.userItems = this.users.slice(Index,Index+10);
        this.PageNumberButtons = this.GetPageNumberButton();
        if(this.users.length>10){
          this.DisableNextButton = false;
        }
        console.log(this.users);
      });
  }

  
  GoToPage(PageNumber){
    if(PageNumber=="..."){
      return;
    }
    this.DisableNextButton = false;
    this.DisablePreviousButton = false;
    this.CurrentPageNumber = PageNumber;
    var Index = (this.CurrentPageNumber-1)*10;
    this.userItems = this.users.slice(Index,Index+10);
    if(this.CurrentPageNumber>=this.MaxPageNumber){
      this.DisableNextButton = true;
    }
    if(this.CurrentPageNumber<=1){
      this.DisablePreviousButton = true;
    }
    this.PageNumberButtons = this.GetPageNumberButton();
}
nextPage(){
  if(this.CurrentPageNumber<this.MaxPageNumber){
    this.DisableNextButton = false;
    this.DisablePreviousButton = false;
    this.CurrentPageNumber++;
    var Index = (this.CurrentPageNumber-1)*10;
    this.userItems = this.users.slice(Index,Index+10);
    if(this.CurrentPageNumber>=this.MaxPageNumber){
      this.DisableNextButton = true;
    }
  }
  this.PageNumberButtons = this.GetPageNumberButton();
}

previousPage(){
if(this.CurrentPageNumber>1){
  this.DisablePreviousButton = false;
  this.DisableNextButton = false;
  this.CurrentPageNumber--;
  var Index = (this.CurrentPageNumber-1)*10;
  this.userItems = this.users.slice(Index,Index+10);
  if(this.CurrentPageNumber<=1){
    this.DisablePreviousButton = true;
  }
}
this.PageNumberButtons = this.GetPageNumberButton();
}

IsActivePageNumber(PageNumber){
if(PageNumber==this.CurrentPageNumber){
  return true;
}else{
  return false;
}
}
IsPageNumberDots(PageNumber){
if(PageNumber=="..."){
  return true;
}else{
  return false;
}
}

}
