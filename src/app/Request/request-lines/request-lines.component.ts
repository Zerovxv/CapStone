import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestLineService } from 'src/app/RequestLine/requestline.service';
import { RequestService } from '../request.service';
import { Request} from '../request.class';
import { RequestLine } from 'src/app/RequestLine/requestline.class';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  req!: Request;




  constructor(
    private reqlinesvc: RequestLineService,
    private router: Router,
    private route: ActivatedRoute,
    private reqsvc: RequestService
  )
  {  }

  list(): void{
    this.router.navigateByUrl("/request/list");
  }


  submit(): void {
    this.reqsvc.review(this.req.id, this.req).subscribe({
      next: (res) => {
        console.debug("submitted for review");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  delete(req: Request): void {
    this.reqlinesvc.remove(req.id).subscribe({
      next: (res) => {
        console.debug("Request removed");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.reqsvc.get(id).subscribe({
      next:(res) => {
        console.debug("Request: ", res);
        this.req = res;
      },
      error:(err) => {console.error(err);}
    });
  }

}


