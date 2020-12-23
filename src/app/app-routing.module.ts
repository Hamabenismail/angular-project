import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageListesComponent } from './home-page-listes/home-page-listes.component';
import {ListCandidatComponent} from "./list-candidat/list-candidat.component";
import {AddCandidatComponent} from "./add-candidat/add-candidat.component";



export const routes: Routes = [
  {
    path:'',
    component: HomePageListesComponent 
  },
   {
     path:'list-candidat',
    component: ListCandidatComponent
   },
   {
     path:'add-candidat',
    component: AddCandidatComponent
   },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
