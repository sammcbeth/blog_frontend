import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  authors: any = [];
  // is_author_selected: boolean = false;
  selected_author: {};

  constructor(
    private apiService: ApiService,
    private authorService: AuthorService
  ) { }

  ngOnInit() {
    this.apiService.getHome().subscribe(
      data => {
        this.authors = data;
        // console.log(data)
      },
      error => console.log(error)
    );
  }
  // ngDoCheck() {
  //   this.selected_author = this.authorService.author_data;
  // }

  // getAuthor() {
  //   // this.authorService.author_data = author;
  //   console.log(this.authorService.author_data);
  //   // console.log(this.selected_author);
  // }


}
