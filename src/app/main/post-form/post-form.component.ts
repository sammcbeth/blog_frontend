import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthorAdminComponent } from 'src/app/author-admin/author-admin.component';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private apiService: ApiService,
    private router: Router,
    private cookieService: CookieService) { }

  postForm = new FormGroup({
    author: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    slug: new FormControl(''),
    image: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit() {
    const authorToken = this.cookieService.get('author-token');
    console.log(authorToken)
    if (!authorToken) {
      this.router.navigate(['/home'])
    }
  }

  createPost() {

    // console.log(data.author)
    this.apiService.createPost(this.postForm.value.image, this.postForm.value.title, this.postForm.value.content, this.postForm.value.slug, +this.postForm.value.author, this.postForm.value.password).subscribe(
      result => console.log(result),
      err => console.log(err)
    );
    if (+this.postForm.value.author in [1, 2, 3]) {
      this.router.navigate(['/author', +this.postForm.value.author])

    }
    else {
      this.router.navigate(['/home', +this.postForm.value.author])
    }

  }
}
