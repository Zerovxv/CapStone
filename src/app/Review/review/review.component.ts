import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  request! = Request[];

  constructor() { }

  ngOnInit(): void {
  }

}allReview(): void {
  this.reqsvc.review().subscribe({
    next:(res) =>{
      console.debug("Requests: ", res);
      this.requests = res;
    },
    error: (err) => {console.error(err);}
  })
}

approve(id: number, req: Request): void {
  this.reqsvc.approve(id, req).subscribe({
    next: (res) => {
      console.debug(res);
      this.allReview();
    },
    error: (err) => {
      console.error(err);
    }
  });
}

reject(id: number, req: Request): void {
  this.reqsvc.reject(id, req).subscribe({
    next: (res) => {
      console.debug(res);
      this.allReview();
    },
    error: (err) => {
      console.error(err);
    }
  });
}

}
