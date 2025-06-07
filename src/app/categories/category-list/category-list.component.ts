import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../core/services/category.service'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories:any[] =[];

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
      this.categoryService.getCategories().subscribe(data => {this.categories = data.categories;});
  }

}
