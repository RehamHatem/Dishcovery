import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../core/services/category.service'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CategoryCardComponent } from '../../shared/category-card/category-card.component';
@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,RouterModule,CategoryCardComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {

  categories:any[] =[];

  constructor(private categoryService:CategoryService){}

  // ngOnInit(): void {
  //     this.categoryService.getCategories().subscribe((data )=> {this.categories = data.categories;console.log('Categories:', this.categories);});
  // }
  ngOnInit(): void {
  this.categoryService.getCategories().subscribe((data) => {
    this.categories = data;
  });
}

}
