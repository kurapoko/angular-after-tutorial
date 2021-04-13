import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  users: User[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{ data: User[] }>('https://reqres.in/api/users?page=2').subscribe(resp =>{
      this.users = resp.data;
    });
  }
}
