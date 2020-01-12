import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { url } from 'inspector';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  server = 'http://localhost:8000';

  all_posts_url = this.server + '/blog/posts/';
  home_url = this.server + '/blog/home/';
  post_url = '';
  author_url = '';
  commentUrl = this.server + '/blog/comments/';
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

  makeComment(name: string, comment: string, post_id: number) {
    const body = JSON.stringify({ user: name, comment: comment, post: post_id });
    return this.httpClient.post(this.commentUrl, body, { headers: this.headers })
  }
  getPostComments(post_id: number) {
    const url = this.server + '/blog/comments/' + post_id + '/get_post_comments/'
    return this.httpClient.get(url, { headers: this.headers })
  }
  createPost(image: string, title: string, content: string, slug: string, author: number) {
    const body = JSON.stringify({ author: author, image: image, title: title, content: content, slug: slug });
    return this.httpClient.post(this.all_posts_url, body, { headers: this.headers })
  }

  // deletePost(slug: string, secret: string){
  //   const body = JSON.stringify({ author: author, image: image, title: title, content: content, slug: slug });
  //   return this.httpClient.post(this.all_posts_url, body, { headers: this.headers })
  // }

  // editPost(post_slug: string, ) {

  // }

  // deletePost(post_slug: string, ) {

  // }
}
