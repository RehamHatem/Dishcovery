import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';

import { CategoryListComponent } from './categories/category-list/category-list.component';

import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { AreaListComponent } from './area/area-list/area-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AskDishcoveryComponent } from './ask-dishcovery/ask-dishcovery.component';

export const routes: Routes = [
    {path:"",redirectTo: 'dishcovery', pathMatch: 'full' },
    {path:"dishcovery",component:RecipesListComponent},
    { path: "categories", component: CategoryListComponent },
    {path:"meal/:id",component:RecipesDetailsComponent},
    {path:"area",component:AreaListComponent},
    {path:"aboutUs",component:AboutUsComponent},
    {path:"ask",component:AskDishcoveryComponent},
    {path:'**',component:NotFoundComponent}

];
