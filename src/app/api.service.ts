import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server = 'https://blog-page-sf.herokuapp.com';

  all_posts_url = `${this.server}/blog/posts/`;
  home_url = `${this.server}/blog/home/`;
  post_url = '';
  author_url = '';
  commentUrl = `${this.server}/blog/comments/`;
  author_data = {}


  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  })

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
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

  makeComment(name: string, comment: string, post_id: number) {
    const body = JSON.stringify({ user: name, comment: comment, post: post_id });
    return this.httpClient.post(this.commentUrl, body, { headers: this.headers })
  }
  getPostComments(post_id: number) {
    const url = this.server + '/blog/comments/' + post_id + '/get_post_comments/'
    return this.httpClient.get(url, { headers: this.headers })
  }
  createPost(image: string, title: string, content: string, slug: string, author: number, password: string) {
    const body = JSON.stringify({ author: author, image: image, title: title, content: content, slug: slug, password: password });
    return this.httpClient.post(this.all_posts_url, body, { headers: this.getAuthHeaders() })
  }
  updatePost(id: number, image: string, title: string, content: string, slug: string, author: number, password: string) {
    const body = JSON.stringify({ post_id: id, author: author, image: image, title: title, content: content, slug: slug, password: password });
    return this.httpClient.put(`${this.all_posts_url}${id}/`, body, { headers: this.getAuthHeaders() })
  }

  deletePost(author_id: number, post_id: number, password: string) {
    const body = JSON.stringify({ author_id: author_id, post_id: post_id, password: password });
    return this.httpClient.post(`${this.all_posts_url}${post_id}/delete_post/`, body, { headers: this.getAuthHeaders() })
  }

  loginUser(username: string, password: string) {
    const body = JSON.stringify({ username: username, password: password });
    return this.httpClient.post(`${this.server}/auth/`, body, { headers: this.headers })
  }

  getAuthHeaders() {
    const token = this.cookieService.get('author-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    })
  }
}
