import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GithubComponent} from './github/github.component';
import{SearchComponent} from './search/search.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'github',component:GithubComponent},
  {path:'search',component:SearchComponent},
  { path: '', redirectTo:"/github", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
