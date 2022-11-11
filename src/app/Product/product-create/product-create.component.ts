import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from 'src/app/Vendor/Vendor.class';
import { VendorService } from 'src/app/Vendor/vendorsvc.service';
import { Product } from '../Product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  pageTitle: string ="Product create";
  IsDetailPage: boolean = false;
  prod: Product= new Product();
  vens!: Vendor[];

  constructor(
    private vensvc: VendorService,
    private prodsvc: ProductService,
    private router: Router
  ) { }

  save(): void{
    this.prodsvc.create(this.prod).subscribe({
      next: (res) =>{
        console.debug("Product ceated");
        this.router.navigateByUrl("/product/list");

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    this.vensvc.list().subscribe({
      next: (res) => {
      console.debug("Vendors", res);
      this.vens= res;

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}

