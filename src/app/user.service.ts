import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  getUsers(): Observable<User[]> {
    return this.http
      .get<{ data: User[] }>('https://reqres.in/api/users?page=2')
      .pipe(
        map(resp => resp.data)
      );
  }
}
