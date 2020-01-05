import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: object;
  @Output() passAuthor = new EventEmitter<{ author: object }>();

  constructor() { }

  ngOnInit() {
  }

  getAuthor(author) {
    this.passAuthor.emit({ author: author })
    // this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent });
  }

}
