import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any = [];
  selectedauthor = null;

  constructor(
    private apiService: ApiService
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


}
