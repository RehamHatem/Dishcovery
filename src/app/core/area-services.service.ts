import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
export interface Area {
  strArea: string;
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}
@Injectable({
  providedIn: 'root'
})
export class AreaServicesService {

  constructor(private http: HttpClient) {}

  getAreas(): Observable<Area[]> {
    return this.http.get<{ meals: Area[] }>(
      'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
    ).pipe(
      map(res => res.meals)
    );
  }

  getMealsByArea(area: string): Observable<Meal[]> {
    return this.http
      .get<{ meals: Meal[] }>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      )
      .pipe(
        map((res) => res.meals || []), // Default to empty array if meals is undefined
        catchError((error) => {
          console.error('Error fetching meals by area:', error);
          return throwError(() => new Error('Failed to load meals. Please try again later.'));
        })
      );
  }
  
}
