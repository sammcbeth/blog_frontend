import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthorAdminComponent } from 'src/app/author-admin/author-admin.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  postForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    slug: new FormControl(''),
    image: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit() {
  }

  createPost() {

    // console.log(data.author)
    this.apiService.createPost(this.postForm.value.image, this.postForm.value.title, this.postForm.value.content, this.postForm.value.slug, +this.postForm.value.author, this.postForm.value.password).subscribe(
      result => console.log(result),
      err => console.log(err)
    );
  }
}
