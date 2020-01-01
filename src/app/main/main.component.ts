import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts: any = [];
  selectedPost = null;


  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.getPosts().subscribe(
      data => {
        this.posts = data;
        console.log(data)
      },
      error => console.log(error)
    );
  }
  selectPost(post) {
    this.selectedPost = post;
    console.log(post);
  }
  resetSelection() {
    this.selectedPost = null;
  }

}
