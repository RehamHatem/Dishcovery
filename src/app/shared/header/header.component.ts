import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  Router ,NavigationEnd,RouterModule , Event  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  showSearch:boolean=true;
  constructor(private router:Router){}
   ngOnInit(): void {
    this.router.events.pipe(
      filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // ✅ Now TypeScript knows 'event' is NavigationEnd
      const currentUrl = event.urlAfterRedirects;
      console.log('NavigationEnd URL:', currentUrl);
      this.showSearch = ['/dishcovery', '/'].includes(currentUrl);
    });
  }

}
