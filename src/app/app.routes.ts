import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';

import { CategoryListComponent } from './categories/category-list/category-list.component';

import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { AreaListComponent } from './area/area-list/area-list.component';

export const routes: Routes = [
    {path:"",redirectTo: 'dishcovery', pathMatch: 'full' },
    {path:"dishcovery",component:RecipesListComponent},
    { path: "categories", component: CategoryListComponent },
    {path:"meal/:id",component:RecipesDetailsComponent},
    {path:"area",component:AreaListComponent},
    {path:'**',component:NotFoundComponent}

];
