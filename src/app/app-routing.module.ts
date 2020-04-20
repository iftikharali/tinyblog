import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAddComponent} from './users/user-add/user-add.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';
import{UserGetComponent} from './users/user-get/user-get.component';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { EditorComponent } from './editor/editor.component';
import { BlogGetComponent } from './blogs/blog-get/blog-get.component';
import { BlogCreateComponent } from './blogs/blog-create/blog-create.component';
import { PostGetComponent } from './posts/post-get/post-get.component';
import { PostComponent } from './posts/post/post.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserLogoutComponent } from './users/user-logout/user-logout.component';


const routes: Routes = [
  {
    path:'user/edit/:id',
    component: UserEditComponent
  },
  {
    path:'user/register',
    component: UserAddComponent
  },
  {
    path:'user/login',
    component: UserLoginComponent
  },
  {
    path:'user/logout',
    component: UserLogoutComponent
  },
  {
    path:'users',
    component: UserGetComponent
  },
  {
    path:'blogs',
    component: BlogComponent
  },
  {
    path:'post/create',
    component: BlogCreateComponent
  },
  {
    path:'blog/:id/:urlPart',
    component: BlogGetComponent
  },
  {
    path:'posts',
    component: PostGetComponent
  },
  {
    path:'post/:id/:urlPart',
    component: PostComponent
  },
  {
    path:'editor',
    component: EditorComponent
  },
  {
    path:'',
    component: LandingComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
