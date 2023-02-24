import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(USERS_URL).pipe(
      tap((data) => console.log(data)),
      map((response) => {
        return {
          users: response,
        };
      }),
      tap((data) => console.log(data))
    );
  }
}
