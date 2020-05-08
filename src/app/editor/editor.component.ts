import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'blog-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() public IsBlog:boolean = false;
  @Output() public editorEvent = new EventEmitter();
  constructor() { }
  HtmlContent:string;
  tags:string ;
  subTitle:string;
  title:string;
  imageContentSubtitle:string;
  imageContent:string;
  ngOnInit() {
    console.log("blog or post editor");
    console.log(this.IsBlog);
  }
  previewImage(event){
    console.log("image change");
    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
    
      reader.onload = () => {
   
        this.imageContent = reader.result as string;
   
      };
   
    }
  }

  triggerEvent(){

  }

}
