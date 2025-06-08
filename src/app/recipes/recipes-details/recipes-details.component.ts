import { Component ,Input,OnInit} from '@angular/core';
import { RecipesService } from '../../core/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipes-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipes-details.component.html',
  styleUrl: './recipes-details.component.css'
})
export class RecipesDetailsComponent implements OnInit {

   @Input() meal: any;
  ingredients: { measure: string; ingredient: string }[] = [];
  tags: string[] = [];

  constructor(private route: ActivatedRoute,private recipeService:RecipesService){}

  ngOnInit(): void {
  const id = String(this.route.snapshot.paramMap.get('id'));
  this.recipeService.getMealById(id).subscribe(response => {
    if (response.meals && response.meals.length > 0) {
      this.meal = response.meals[0];
      this.extractIngredients();
      this.extractTags();
    }
  });
}


  private extractIngredients(): void {
    for (let i = 1; i <= 20; i++) {
      const ingredient = this.meal[`strIngredient${i}`];
      const measure = this.meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        this.ingredients.push({ ingredient, measure });
      }
    }
  }

  private extractTags(): void {
    if (this.meal.strTags) {
    this.tags = this.meal.strTags.split(',').map((tag: string) => tag.trim());
    }
  }

}
