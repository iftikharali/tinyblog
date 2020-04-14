import { Component, OnInit } from '@angular/core';
export interface LandingTile {
  Title: string;
  Url: string;
  votes: number;
  about: string;
  img: string;
  category: string;
  vote: number
}
@Component({
  selector: 'app-post-get',
  templateUrl: './post-get.component.html',
  styleUrls: ['./post-get.component.css']
})

export class PostGetComponent implements OnInit {

  constructor() { }
  landingtiles: LandingTile[] = [
    {Title: 'Sample Tyny blog title 1', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 2', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 3', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 4', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 5', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 6', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 7', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 8', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 9', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 1', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 10', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 11', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 12', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 13', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 14', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 15', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 16', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 17', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 18', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 19', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 20', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
    {Title: 'Sample Tyny blog title 21', Url: 'http://localhost:4200/blog/320/blog+title+new+url', votes: 100, about: "A genuine users of the year", img: '../assets/images/blog.jpg',category: 'Azure Web Developent', vote: 245},
  ];
  ngOnInit() {
  }

}
