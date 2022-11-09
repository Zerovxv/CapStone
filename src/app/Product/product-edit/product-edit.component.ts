import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  pageTitle: string= "Product Change";
  IsDetailPage: boolean= false;
  prod!: Product;

  constructor(
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    save(): void{
      this.prodsvc.edit(this.prod).subscribe({
        next: (res) =>{
          console.debug("Product Changed");
          this.router.navigateByUrl("/product/list");
        },
        error: (err) =>{
          console.error(err);
        }

      });


    }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) =>{
        console.debug("Product", res);
        this.prod = res;
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }

};
