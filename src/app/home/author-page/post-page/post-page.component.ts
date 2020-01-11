import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post: {};
  author_data: {};
  author_id: string;
  post_slug: string;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.post_slug = this.route.snapshot.params['slug'];
    this.author_id = this.route.snapshot.params['id'];
    this.apiService.getAuthor(this.author_id).subscribe(
      (data) => {
        this.author_data = data;
      }
    )
    this.apiService.getPost(this.post_slug).subscribe(
      (data) => {
        this.post = data;
        console.log(this.post)
      }
    )
  }

}
