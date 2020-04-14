import { Component, OnInit } from '@angular/core';

export interface Tile {
  Name: string;
  votes: number;
  about: string;
  img: string;
  category: string;
  vote: number
}
@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent implements OnInit {

  constructor() { }
  searchText;
  tiles: Tile[] = [
    {Name: 'User1', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User2', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User3', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User4', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User5', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User6', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User7', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User8', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User9', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User10', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User11', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User12', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User13', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User14', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User15', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User16', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User17', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User18', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User19', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User20', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
    {Name: 'User21', votes: 100, about: "A genuine users of the year", img: '../assets/images/user.jpg',category: 'Azure Web Developent', vote: 245},
  ];
  ngOnInit() {
    this.GetUserList();
  }

  GetUserList(){
    this.tiles = this.tiles.concat(this.tiles);
  }

}
