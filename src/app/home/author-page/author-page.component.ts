import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthorService } from '../../author.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
  author_data: any;
  author_id: any;
  token: string;

  constructor(
    private apiService: ApiService,
    private authorService: AuthorService,
    private route: ActivatedRoute,
    private cookieService: CookieService
  ) {
  }

  ngOnInit() {
    this.token = this.cookieService.get('author-token');
    this.author_id = this.route.snapshot.params['id'];
    console.log(this.author_id);
    this.apiService.getAuthor(this.author_id).subscribe(
      (data) => {
        this.author_data = data;
      }
    )
    console.log(this.author_data);
  }

  deletePost(post_slug) {
    console.log(post_slug);
  }

  editPost(post_slug) {
    console.log(post_slug);
  }

}
