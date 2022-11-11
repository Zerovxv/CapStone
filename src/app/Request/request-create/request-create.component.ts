import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/common/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  pageTitle: string ="Request create";
  IsDetailPage: boolean = false;
  req: Request= new Request();

  constructor(
    private sys: SystemService,
    private requestsvc: RequestService,
    private router: Router
  ) { }

  save(): void{
    this.requestsvc.create(this.req).subscribe({
      next: (req) =>{
        console.debug("Request ceated");
        this.router.navigateByUrl("/request/list");

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.sys.ChkLogin();
    this.req.userId = this.sys.user.id
  }

}


