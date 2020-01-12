import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {
  post: any;
  author_data: {};
  author_id: string;
  post_slug: string;
  comments: any;

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
        this.apiService.getPostComments(this.post.Post.id).subscribe(
          (data) => {
            this.comments = data;
          }
        )
      }
    )

  }


  showCommentData() {
    console.log(this.comments)
  }
  onSubmit(form: NgForm) {
    console.log(form.value.commentName)
    console.log(form.value.comment)
    this.apiService.makeComment(form.value.commentName, form.value.comment, this.post.Post.id).subscribe(
      result => {
        console.log(result);
      },
      error => console.log(error)
    );
  }

}
