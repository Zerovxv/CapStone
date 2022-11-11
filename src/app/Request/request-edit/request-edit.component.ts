import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  pageTitle: string= "Request Change";
  IsDetailPage: boolean= false;
  req!: Request;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    save(): void{
      this.reqsvc.edit(this.req).subscribe({
        next: (res) =>{
          console.debug("Request Changed");
          this.router.navigateByUrl("/request/list");
        },
        error: (err) =>{
          console.error(err);
        }

      });


    }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next: (res) =>{
        console.debug("Request", res);
        this.req = res;
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }

};
