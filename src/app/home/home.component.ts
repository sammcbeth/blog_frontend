import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any = [];
  // is_author_selected: boolean = false;
  selected_author_data: {};

  constructor(
    private apiService: ApiService,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.apiService.getHome().subscribe(
      data => {
        this.authors = data;
        console.log(data)
      },
      error => console.log(error)
    );
  }
  getAuthor(author) {
    // console.log(author.author.id)
    this.authorService.getAuthor(author.author.id);

  }


}
