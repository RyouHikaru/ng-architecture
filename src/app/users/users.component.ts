import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: "John Smith",
      username: "johnsmith",
      email: "johnsmith@yahoo.com"
    },
    {
      id: 2,
      name: "Hailey Luijia",
      username: "haileyluijia",
      email: "haileyluijia@yahoo.com"
    },
  ];

}
