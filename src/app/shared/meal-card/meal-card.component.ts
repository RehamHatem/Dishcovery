import { Component ,Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent {
  @Input() meal: any;
  

  getMealDetails(id :string) {
    
    console.log(`Meal clicked: ${id}`);
  }

}
