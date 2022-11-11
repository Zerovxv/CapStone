import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../Vendor.class';
import { VendorService } from '../vendorsvc.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  pageTitle: string ="Vendor create";
  IsDetailPage: boolean = false;
  ven: Vendor= new Vendor();

  constructor(
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  save(): void{
    this.vendorsvc.create(this.ven).subscribe({
      next: (res) =>{
        console.debug("Vendor ceated");
        this.router.navigateByUrl("/vendor/list");

      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
  }

}

