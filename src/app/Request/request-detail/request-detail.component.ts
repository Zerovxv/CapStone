import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  IsDetailPage: boolean = true;
  req!: Request;
  constructor(
    private requestsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  showVerifyButton: boolean = false;


  remove(): void{
    this.showVerifyButton = !this.showVerifyButton
  };

  verifyDelete(): void{
    this.requestsvc.remove(this.req.id).subscribe({
      next: (res) => {
        console.debug("Product deleted");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  };

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.requestsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product", res);
        this.req = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

};

