import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AppService {

    constructor(private http: HttpClient) {}

    addTask(task) {
        let body = JSON.stringify(task);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.http.post('http://localhost:3000/', body, {headers: headers}).subscribe();
    }

}