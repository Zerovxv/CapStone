import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Product/Product.class';
import { ProductService } from 'src/app/Product/product.service';
import { RequestLine } from '../requestline.class';
import { RequestLineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestLineEditComponent implements OnInit {

  req!: Request;
  prod!: Product;

  pageTitle: string= "RequestLine Change";
  IsDetailPage: boolean= false;
  reqline!: RequestLine;

  constructor(
    private reqlinesvc: RequestLineService,
    private route: ActivatedRoute,
    private router: Router,
    private prodsvc: ProductService
  ) { }
    save(): void{
      console.debug("Before;", this.reqline)
      this.reqlinesvc.edit(this.reqline).subscribe({
        next: (res) =>{
          console.debug("RequestLine Changed");
          this.router.navigateByUrl("/requestline/edit");
        },
        error: (err) =>{
          console.error(err);
        }

      });




    }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.reqlinesvc.get(id).subscribe({
      next: (res) =>{
        console.debug("RequestLine", res);
        this.reqline = res;
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }

};
