import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(USERS_URL);
  }
}
