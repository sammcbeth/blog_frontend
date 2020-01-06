import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthorService } from '../../author.service';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: object;
  // @Output() passAuthor = new EventEmitter<{ author: object }>();
  // selected_author: {};
  constructor(private authorService: AuthorService) { }

  ngOnInit() {

  }

  getAuthor(author) {
    // this.authorService.author_data = author;
    // this.selected_author = author;
    // console.log(this.selected_author);
    this.authorService.author_data = author;
    // console.log(this.authorService.author_data)
  }
  // ngOnDestroy() {
  //   this.authorService.author_data = this.selected_author;
  // }

}
