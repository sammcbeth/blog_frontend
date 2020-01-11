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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostPageComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    HomeModule,
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
