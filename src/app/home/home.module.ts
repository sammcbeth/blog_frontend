import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorPageComponent } from './author-page/author-page.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'author',
    component: AuthorPageComponent
  }
];

@NgModule({
  declarations: [HomeComponent, AuthorDetailComponent, AuthorPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
