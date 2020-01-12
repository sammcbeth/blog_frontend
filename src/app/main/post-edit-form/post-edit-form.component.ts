import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-post-edit-form',
  templateUrl: './post-edit-form.component.html',
  styleUrls: ['./post-edit-form.component.css']
})
export class PostEditFormComponent implements OnInit {
  post_slug: string;
  post: any;

  postForm = new FormGroup({
    title: new FormControl(''),
    content: new FormControl(''),
    slug: new FormControl('')
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

  editForm() {
    console.log(this.postForm)
  }

}
