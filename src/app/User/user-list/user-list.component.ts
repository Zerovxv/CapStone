import { Component, OnInit } from '@angular/core';
import { User } from '../User.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  pageTitle: string = "User List";
  use: User[]= [];

  constructor(
    private usersvc: UserService
  ) { }

  ngOnInit(): void {
    this.usersvc.list().subscribe({
      next: (res) =>{
        console.debug("Users", res);
        this.use = res;

      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
