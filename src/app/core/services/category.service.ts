import { Injectable } from '@angular/core';
import { HttpClient , } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  private baseUrl = 'https://www.themealdb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  // Get all categories
  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories.php`)
    .pipe(
        map((res: any) => res.categories || [])
      );
  }

  // Get meals by category name
  getMealsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/filter.php?c=${category}`);
  }
}
