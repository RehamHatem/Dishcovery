import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-meal-card',
  standalone: true,
  imports: [],
  templateUrl: './meal-card.component.html',
  styleUrl: './meal-card.component.css'
})
export class MealCardComponent {
  @Input() meal: any;
  

  getMealDetails() {
    
    console.log('Meal clicked:');
  }

}
