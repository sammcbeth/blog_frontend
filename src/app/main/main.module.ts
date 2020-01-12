import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router'

import { ApiService } from '../api.service'

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostEditFormComponent } from './post-edit-form/post-edit-form.component';

const routes: Routes = [
  {
    path: 'posts',
    component: MainComponent
  }
];

@NgModule({
  declarations: [
    MainComponent,
    PostListComponent,
    PostDetailsComponent,
    PostFormComponent,
    PostEditFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ApiService
  ]
})
export class MainModule { }
