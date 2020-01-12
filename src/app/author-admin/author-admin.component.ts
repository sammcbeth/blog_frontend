import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-author-admin',
  templateUrl: './author-admin.component.html',
  styleUrls: ['./author-admin.component.css']
})
export class AuthorAdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }

}
