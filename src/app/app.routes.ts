import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';


export const routes: Routes = [
    {path:"dishcovery",component:RecipesListComponent},
    { path: "categories", component: CategoryListComponent },
];
