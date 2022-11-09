import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) { }

  showVerifyButton: boolean = false;


  remove(): void{
    this.showVerifyButton = !this.showVerifyButton;
  }

  verifyDelete(): void{
    this.usesvc.remove(this.use.id).subscribe({
      next: (res) => {
        console.debug("User deleted");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

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
