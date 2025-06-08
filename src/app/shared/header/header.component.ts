import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router ,NavigationEnd,RouterModule , Event  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RecipesService } from '../../core/recipes.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  showSearch:boolean=true;
  @Output() searchByName = new EventEmitter<string>();
  searchName: string = '';
  constructor(private router:Router,private search:RecipesService){}
   ngOnInit(): void {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const currentUrl = event.urlAfterRedirects;
      console.log('NavigationEnd URL:', currentUrl);
      this.showSearch = ['/dishcovery', '/'].includes(currentUrl);
    });
  }
  
  onSearchChange() {
  this.search.setSearchTerm(this.searchName);
}

}
