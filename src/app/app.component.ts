import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { MenusService } from './Menus/MenuServices/menus.service';
import Menu from './Models/Menu';
import { Router } from '@angular/router';
import { AuthenticationService } from './users/userService/authentication.service';
import User from './Models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TinyBlog';
  leftMenus:Menu[] =[];
  rightMenus:Menu[] =[];
  centerMenus:Menu[] =[];
  menus: Menu[] =[];
  currentUser: User;
  searchForm: FormGroup;
  constructor(private fb: FormBuilder, private menuService:MenusService,
    private router: Router,
    private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.createForm();
    menuService.getMenus().subscribe(response =>
      {
        this.menus = response;
        this.formatMenu();
      });
   }
   formatMenu(){
      let count = Math.ceil(this.menus.length/3);
      this.leftMenus = this.menus.slice(0,count);
      this.centerMenus = this.menus.slice(count,count*2);
      this.rightMenus = this.menus.slice(count*2,count*3);
      console.log(count);
      console.log(this.menus);
   }
   createForm(){
     
    this.searchForm = this.fb.group({
      SearchContent: ['']
    });
   }

   logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
