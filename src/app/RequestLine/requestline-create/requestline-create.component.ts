import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product.class';
import { ProductService } from 'src/app/Product/product.service';
import { RequestService } from 'src/app/Request/request.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestLineCreateComponent implements OnInit {

  pageTitle: string ="RequestLine create";
  IsDetailPage: boolean = false;
  reqline: RequestLine= new RequestLine();
  prod!: Product[];

  constructor(
    private reqlinesvc: RequestLineService,
    private router: Router,
    private route: ActivatedRoute,
    private reqsvc: RequestService,
    private prodsvc: ProductService

  ) { }

  save(): void{
    this.reqline.productId= +this.reqline.productId
    console.debug(this.reqline)
    this.reqlinesvc.create(this.reqline).subscribe({
      next: (reqline) =>{
        console.debug("RequestLine ceated");
        this.router.navigateByUrl("/request/lines/create");

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.reqline.requestId= +this.route.snapshot.params["id"];

    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.prod = res;

      },
      error: (err) => {
        console.error(err);
      }
    });

  }

}

