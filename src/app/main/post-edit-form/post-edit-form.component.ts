import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, NgForm } from '@angular/forms'

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.css']
})
export class PostEditFormComponent implements OnInit {
  post_slug: string;
  post: any;

  postForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    slug: new FormControl(''),
    image: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private apiService: ApiService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.post_slug = this.route.snapshot.params['slug'];
    this.apiService.getPost(this.post_slug).subscribe(
      data => {
        this.post = data;
        console.log(data)
      }
    )
  }

  editPost(form: NgForm) {
    this.apiService.updatePost(this.post.Post.id, form.control.value.image, form.control.value.title, form.control.value.content, form.control.value.slug, form.control.value.author, form.control.value.password).subscribe(
      result => {
        console.log(result);

      },
      err => {
        console.log(err);
      }
    )
  }

}
