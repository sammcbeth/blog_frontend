import { Injectable, OnInit } from "@angular/core";
import { ApiService } from './api.service';

@Injectable()
export class AuthorService {
    public author_data: {};

    // constructor(private apiService: ApiService) {

    // }
    // getAuthor(id: number) {
    //     this.apiService.getAuthor(id).subscribe(
    //         data => {
    //             this.author_data = data;
    //             console.log(data)
    //         }
    //     )
    // }
}