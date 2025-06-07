import { Routes } from '@angular/router';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';

export const routes: Routes = [
    {path:"",redirectTo: 'dishcovery', pathMatch: 'full' },
    {path:"dishcovery",component:RecipesListComponent},
    {path:"meal/:id",component:RecipesDetailsComponent},
    {path:'**',component:NotFoundComponent}
];
