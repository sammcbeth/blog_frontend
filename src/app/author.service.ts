import { Injectable } from "@angular/core";
import { ApiService } from './api.service';

@Injectable()
export class AuthorService {
    author_data: {};

    constructor(private apiService: ApiService) {

    }

    // addAccount(name: string, status: string) {
    //     this.accounts.push({ name: name, status: status });
    //     // this.loggingService.logStatusChange(status);
    // }

    // updateStatus(id: number, status: string) {
    //     this.accounts[id].status = status;
    //     // this.loggingService.logStatusChange(status);
    // }
    getAuthor(id: number) {
        this.author_data = this.apiService.getAuthor(id);
    }
}