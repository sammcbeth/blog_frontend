import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorPageComponent } from './author-page/author-page.component'
import { AuthorService } from '../author.service';
import { ApiService } from '../api.service';



@NgModule({
  declarations: [HomeComponent, AuthorDetailComponent, AuthorPageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule
  ],

})
export class HomeModule { }
