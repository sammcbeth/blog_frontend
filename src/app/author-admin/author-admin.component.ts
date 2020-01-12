import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';

interface TokenObj {
  token: string;
}

@Component({
  selector: 'app-author-admin',
  templateUrl: './author-admin.component.html',
  styleUrls: ['./author-admin.component.css']
})
export class AuthorAdminComponent implements OnInit {

  constructor(private apiService: ApiService,
    private cookieService: CookieService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.apiService.loginUser(form.value.username, form.value.password).subscribe(
      (result: TokenObj) => {
        console.log(result)
        this.cookieService.set('author-token', result.token);
      },
      err => {
        console.log(err);
      }
    )
  }

}
