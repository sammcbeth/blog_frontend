import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server = 'http://localhost:8000';

  all_posts_url = this.server + '/blog/posts/';
  home_url = this.server + '/blog/home/';
  post_url = ''
  author_url = '';
  author_data = {}

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // Authorization: 'Token 2be0421f7d092b1f51b7557905a7e30f26031814'
  })

  constructor(
    private httpClient: HttpClient
  ) { }

  getPosts() {
    return this.httpClient.get(this.all_posts_url, { headers: this.headers });
  }

  getHome() {
    return this.httpClient.get(this.home_url, { headers: this.headers })
  }

  getAuthor(author) {
    this.author_url = this.server + '/blog/home/' + author + '/get_author_page/';
    return this.httpClient.get(this.author_url, { headers: this.headers })

  }
  getPost(slug) {
    this.post_url = this.server + '/blog/posts/' + slug + '/get_post/';
    return this.httpClient.get(this.post_url, { headers: this.headers })
  }
}
