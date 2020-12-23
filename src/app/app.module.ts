import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageListesComponent } from './home-page-listes/home-page-listes.component';
import {ListCandidatComponent} from "./list-candidat/list-candidat.component";
import {AddCandidatComponent} from "./add-candidat/add-candidat.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CandidatService } from './services/candidat.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomePageListesComponent,
    ListCandidatComponent,
    AddCandidatComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    CandidatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
