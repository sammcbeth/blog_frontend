import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts = [];
  @Output() selectPost = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {

  }
  postClicked(post) {
    this.selectPost.emit(post);
  }
}
