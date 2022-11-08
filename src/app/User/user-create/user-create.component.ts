import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../User.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  pageTitle: string ="User create";
  IsDetailPage: boolean = false;
  use: User = new User();

  constructor(
    private usesvc: UserService,
    private router: Router
  ) { }

  save(): void{
    this.usesvc.create(this.use).subscribe({
      next: (res) =>{
        console.debug("User ceated");
        this.router.navigateByUrl("/use/list");

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }

}
