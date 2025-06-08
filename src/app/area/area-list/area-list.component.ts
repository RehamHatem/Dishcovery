import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Area, AreaServicesService } from '../../core/area-services.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-list.component.html',
  styleUrl: './area-list.component.css'
})
export class AreaListComponent  implements OnInit{

  areas: Area[] = [];
  loading = false;
  selectedArea: string = '';

  @Output() areaSelected = new EventEmitter<string>();

  constructor(private areaService: AreaServicesService , private router:Router ) {}

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
  this.router.navigate(['/dishcovery'], { queryParams: { area } });
}


}
