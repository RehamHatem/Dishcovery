import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Area, AreaServicesService, Meal } from '../../core/area-services.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MealCardComponent } from '../../shared/meal-card/meal-card.component';

@Component({
  selector: 'app-area-list',
  standalone: true,
  imports: [CommonModule,MealCardComponent],
  templateUrl: './area-list.component.html',
  styleUrl: './area-list.component.css'
})
export class AreaListComponent  implements OnInit{

  areas: Area[] = [];
  loading = false;
  selectedArea: string = '';
  meals: Meal[] = [];
  
  error: string | null = null;
  @Output() areaSelected = new EventEmitter<string>();

  constructor(private areaService: AreaServicesService , private router:Router,private route: ActivatedRoute ) {}

  ngOnInit() {
    this.loading = true;
    this.areaService.getAreas().subscribe({
      next: (areas) => {
        this.areas = areas;
        this.loading = false;
      },
      error: () => {
      this.loading = false;
      console.log("erooooooor");
      },
    });
  }

selectArea(area: string) {
  this.selectedArea = area;
  this.areaSelected.emit(area); 
  // this.router.navigate(['/area'], { queryParams: { area } });
  this.loadMealsByArea(area);
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
