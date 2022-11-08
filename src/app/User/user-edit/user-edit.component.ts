import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../User.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  pageTitle: string= "User Change";
  IsDetailPage: boolean= false;
  use!: User;

  constructor(
    private usesvc: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    save(): void{
      this.usesvc.edit(this.use).subscribe({
        next: (res) =>{
          console.debug("User Changed");
          this.router.navigateByUrl("/use/list");
        },
        error: (err) =>{
          console.error(err);
        }

      });


    }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.usesvc.get(id).subscribe({
      next: (res) =>{
        console.debug("User", res);
        this.use = res;
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }

}
