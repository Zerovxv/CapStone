import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../Vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  pageTitle: string= "Vendor Change";
  IsDetailPage: boolean= false;
  ven!: Vendor;

  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
    save(): void{
      this.vendorsvc.edit(this.ven).subscribe({
        next: (res) =>{
          console.debug("Vendor Changed");
          this.router.navigateByUrl("/vendor/list");
        },
        error: (err) =>{
          console.error(err);
        }

      });


    }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vendorsvc.get(id).subscribe({
      next: (res) =>{
        console.debug("Vendor", res);
        this.ven = res;
      },
      error: (err) =>{
        console.error(err);
      }
    });
  }

};
