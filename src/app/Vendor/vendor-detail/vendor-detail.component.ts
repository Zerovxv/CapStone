import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../Vendor.class';
import { VendorService } from '../vendorsvc.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  pageTitle: string = "Vendor Detail";
  IsDetailPage: boolean = true;
  ven!: Vendor;
  constructor(
    private vendorsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  showVerifyButton: boolean = false;


  remove(): void{
    this.showVerifyButton = !this.showVerifyButton
  };

  verifyDelete(): void{
    this.vendorsvc.remove(this.ven.id).subscribe({
      next: (res) => {
        console.debug("Vendor deleted");
        this.router.navigateByUrl("/vendor/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  };

  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.vendorsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor", res);
        this.ven = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

};

