import { Injectable } from '@angular/core';
import { HttpClient , } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
meals : any []=[];
  constructor(private http: HttpClient) { }
    getAllMeals(): Observable<any[]> {
    return this.http.get<any>('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .pipe(
        map(res => res.meals || [])
      );
  }

  getMealById(id : string): Observable<any> {
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  }

private searchTerm = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTerm.asObservable();

  setSearchTerm(term: string) {
    this.searchTerm.next(term);
  }



 // Get meals by category name
  getMealsByCategory(categoryName: string): Observable<any> {
    return this.http.get<any>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
  }
}
