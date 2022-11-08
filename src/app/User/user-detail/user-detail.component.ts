import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  pageTitle: string = "User Detail";
  IsDetailPage: boolean = true;
  use!: User;
  constructor(
    private usesvc: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.usesvc.get(id).subscribe({
      next: (res) => {
        console.debug("User", res);
        this.use = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
