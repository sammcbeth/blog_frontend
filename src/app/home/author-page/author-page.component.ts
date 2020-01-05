import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api.service'

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit {
  @Input() author_data: {};

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {

  }
  resetAuthor() {
    this.author_data = null;
    console.log(this.author_data)
  }

}
