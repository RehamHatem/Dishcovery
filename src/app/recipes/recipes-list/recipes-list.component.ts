import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../core/recipes.service';
import { CommonModule } from '@angular/common';
import { MealCardComponent } from '../../shared/meal-card/meal-card.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule,MealCardComponent, HttpClientModule],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  meals:any[]=[];
constructor(private recipesService:RecipesService){}
  ngOnInit() {
    this.recipesService.getAllMeals().subscribe(data => {
      this.meals = data;
    });
  }

  // goToMealDetails() {
    
  // }

}
