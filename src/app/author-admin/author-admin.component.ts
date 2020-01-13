import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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
    private cookieService: CookieService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.apiService.loginUser(form.value.username, form.value.password).subscribe(
      (result: TokenObj) => {
        console.log(result)
        this.cookieService.set('author-token', result.token);
        this.router.navigate(['home'])
      },
      err => {
        console.log(err);
      }
    )
  }

}
