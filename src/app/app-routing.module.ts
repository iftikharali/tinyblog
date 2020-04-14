import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAddComponent} from './user-add/user-add.component';
import {UserEditComponent} from './user-edit/user-edit.component';
import{UserGetComponent} from './user-get/user-get.component';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { EditorComponent } from './editor/editor.component';
import { BlogGetComponent } from './blog-get/blog-get.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { PostGetComponent } from './posts/post-get/post-get.component';
import { PostComponent } from './posts/post/post.component';


const routes: Routes = [
  {
    path:'user/create',
    component: UserAddComponent
  },
  {
    path:'user/edit/:id',
    component: UserEditComponent
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
    path:'blog/create',
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
    path:'post/:id',
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
