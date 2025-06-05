import { Injectable } from '@angular/core';
import { HttpClient , } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
}
