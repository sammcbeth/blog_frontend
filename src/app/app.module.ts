import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { AuthorPageComponent } from './home/author-page/author-page.component';
import { AuthorService } from './author.service';
import { ApiService } from './api.service';
import { PostPageComponent } from './home/author-page/post-page/post-page.component';
import { AuthorAdminComponent } from './author-admin/author-admin.component';
import { AuthorAdminModule } from './author-admin/author-admin.module'
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './main/post-form/post-form.component';
import { PostEditFormComponent } from './main/post-edit-form/post-edit-form.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'author/:id',
    component: AuthorPageComponent
  },
  {
    path: 'author/:id/:slug',
    component: PostPageComponent
  },
  {
    path: 'author-admin',
    component: AuthorAdminComponent
  },
  {
    path: 'new-post',
    component: PostFormComponent
  },
  {
    path: 'edit-post/:slug',
    component: PostEditFormComponent
  },
  {
    path: 'delete-post/:slug',
    component: PostEditFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MainModule,
    HomeModule,
    AuthorAdminModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent],
  providers: [ApiService, AuthorService]
})
export class AppModule { }
