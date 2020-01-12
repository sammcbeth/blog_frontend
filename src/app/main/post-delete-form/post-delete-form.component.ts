import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-delete-form',
  templateUrl: './post-delete-form.component.html',
  styleUrls: ['./post-delete-form.component.css']
})
export class PostDeleteFormComponent implements OnInit {
  post: any;
  post_slug: string;
  author_id: number;
  author_data: any;

  postForm = new FormGroup({
    password: new FormControl('')
  })

  constructor(private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.post_slug = this.route.snapshot.params['slug'];
    this.apiService.getPost(this.post_slug).subscribe(
      data => {
        this.post = data
        this.apiService.getAuthor(this.post.Post.author).subscribe(
          data => {
            this.author_data = data;
          }
        )
      },
      err => {
        console.log(err)
      }
    )
  }

  deletePost(form: NgForm) {
    this.apiService.deletePost(this.author_data.author.id, this.post.Post.id, form.value.password).subscribe(
      result => {
        console.log(result)
      },
      err => {
        console.log(err)
      }
    )
    this.router.navigate(['/author', this.author_data.author.id])


  }
}
