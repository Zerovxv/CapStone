import { Component, OnInit } from '@angular/core';
import { Vendor } from '../Vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  pageTitle: string = "Vendor List";
  ven: Vendor[]= [];

  constructor(
    private vendorsvc: VendorService
  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe({
      next: (res) =>{
        console.debug("Vendor", res);
        this.ven = res;

      },
      error: (err) => {
        console.error(err);
      }
    });
  }

};
