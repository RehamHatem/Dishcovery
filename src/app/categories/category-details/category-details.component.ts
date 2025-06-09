import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import{RecipesService} from '../../core/recipes.service'
import { MealCardComponent } from '../../shared/meal-card/meal-card.component';
@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [MealCardComponent,CommonModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent {
 meals: any[] = [];
  constructor(private route:ActivatedRoute, private recipeservice:RecipesService){}

  ngOnInit():void{
  const categoryName= this.route.snapshot.paramMap.get("categoryName");
  if (categoryName){
    this.recipeservice.getMealsByCategory(categoryName).subscribe({
      next: (response) => {
        this.meals = response.meals;
        console.log('Meals:', this.meals);
      },
      error: (error) => {
        console.error('Error loading meals:', error);
      }
    });
  }
  }
}
