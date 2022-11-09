import { Component, OnInit } from '@angular/core';
import { Product } from '../Product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Product List";
  prod: Product[]= [];

  constructor(
    private prodsvc: ProductService
  ) { }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) =>{
        console.debug("Product", res);
        this.prod = res;

      },
      error: (err) => {
        console.error(err);
      }
    });
  }

};
