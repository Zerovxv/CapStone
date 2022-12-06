import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';




@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {


  request: Request[] = [];
  rejectionReason: string ="";
  message: string ="";

  approve(request: Request): void {
    this.requestsvc.approve(request).subscribe(
      res => {
        console.debug("Request approved!", res);

      },
      err => {
        console.error("ERROR: ", err);
      }
    );
  }

  reject(request: Request): void {
    if(this.rejectionReason != null) {
      request.rejectionReason = this.rejectionReason;
      this.requestsvc.reject(request).subscribe(
        res => {
          console.debug("Request rejected. Rejection Reason: ", request.rejectionReason, res);

          this.rejectionReason = "";
        },
        err => {
          console.error("ERROR: review-requests.component.ts, requestsvc.reject(request)", err);
        }
      );
    } else {
      console.error("ERROR: Request must have a rejection reason!!");
    }
  }


  constructor(
    private requestsvc: RequestService,
    private sys: SystemService
  ) { }

  ngOnInit(): void {

    }
  }


