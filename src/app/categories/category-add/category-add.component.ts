import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../CategoryService/category.service';
import Category from 'src/app/Models/Category';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  categoryAvailableInBuffer:boolean = false;
  categoryName:string;
  categoryDescription:string;
  categoryList:Category[];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryService.getCategories().subscribe(response =>
      {
        this.categoryList = response;
      });
  }
  SaveCategory(){
    this.categoryService.SaveCategory(this.categoryName,this.categoryDescription).subscribe(response =>
      {
        this.getCategories();
        this.categoryName = "";
        this.categoryDescription = "";
        console.log(response);
      });
  }
  
  loadMoreCategory(){}
}
