import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = "Product Detail";
  IsDetailPage: boolean = true;
  prod!: Product;
  constructor(
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  showVerifyButton: boolean = false;


  remove(): void{
    this.showVerifyButton = !this.showVerifyButton
  };

  verifyDelete(): void{
    this.prodsvc.remove(this.prod.id).subscribe({
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
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product", res);
        this.prod = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

};

