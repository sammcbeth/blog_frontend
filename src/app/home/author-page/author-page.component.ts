import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service';
import { AuthorService } from '../../author.service';

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
  author_data: {} = this.authorService.author_data;

  constructor(
    private apiService: ApiService,
    private authorService: AuthorService
  ) {
  }

  ngOnInit() {
    this.apiService.getAuthor(this.author_data.id).subscribe(
      data => {
        this.author_data = data;
        // console.log(data)
      },
      error => console.log(error)
    );
  }

  // resetAuthor() {
  //   this.author_data = null;
  //   console.log(this.author_data)
  // }

}
