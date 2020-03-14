import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-get',
  templateUrl: './blog-get.component.html',
  styleUrls: ['./blog-get.component.css']
})
export class BlogGetComponent implements OnInit {

  constructor() { }
  private _opened: boolean = false;
 
  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  ngOnInit() {
  }

}
