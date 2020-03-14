import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TinyBlog';
  
  searchForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }
   createForm(){
     
    this.searchForm = this.fb.group({
      SearchContent: ['']
    })
   }
}
