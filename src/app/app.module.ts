import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserGetComponent } from './users/user-get/user-get.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users/userService/users.service'
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blogs/blog/blog.component';
import { EditorComponent } from './editor/editor.component';
import { BlogGetComponent } from './blogs/blog-get/blog-get.component';
import { BlogCreateComponent } from './blogs/blog-create/blog-create.component';
import { BlogEditComponent } from './blogs/blog-edit/blog-edit.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostGetComponent } from './posts/post-get/post-get.component';
import { PostComponent } from './posts/post/post.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserLogoutComponent } from './users/user-logout/user-logout.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { UserComponent } from './users/user/user.component';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoExtendsPipe extends TimeAgoPipe {}
@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserGetComponent,
    UserEditComponent,
    LandingComponent,
    BlogComponent,
    EditorComponent,
    BlogGetComponent,
    BlogCreateComponent,
    BlogEditComponent,
    PostCreateComponent,
    PostGetComponent,
    PostComponent,
    UserLoginComponent,
    UserLogoutComponent,
    TimeAgoExtendsPipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
