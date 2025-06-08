import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../core/recipes.service';
import { CommonModule } from '@angular/common';
import { MealCardComponent } from '../../shared/meal-card/meal-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AreaServicesService, Meal } from '../../core/area-services.service';
import { AreaListComponent } from '../../area/area-list/area-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [CommonModule,MealCardComponent, HttpClientModule,AreaListComponent],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})
export class RecipesListComponent implements OnInit {
  meals: Meal[] = [];
  loading = false;
  error: string | null = null;

  constructor(private recipesService: RecipesService,private areaService:AreaServicesService,private route: ActivatedRoute) {}

  ngOnInit() {
this.route.queryParams.subscribe(params => {
      const area = params['area'];
      if (area) {
        this.loadMealsByArea(area);
      }
    });

  }

  private loadMealsByArea(area: string) {
    this.loading = true;
    this.error = null;
    this.areaService.getMealsByArea(area).subscribe({
      next: (meals) => {
        this.meals = meals;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.message;
        this.meals = [];
        this.loading = false;
      }
    });
  }

}
