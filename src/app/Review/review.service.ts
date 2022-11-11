import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseurl: string = "http://localhost:5253/api/";

  constructor(
    private http: HttpClient
  ) { }

  approve(id: number, req: Request) : Observable<Request> {
    return this.http.put(`${this.baseurl}/Approve/${id}`, req) as Observable<Request>;
  }

  reject(id: number, exp: Request) : Observable<Request> {
    return this.http.put(`${this.baseurl}/Reject/${id}`, exp) as Observable<Request>;
  }

  review() : Observable<Request[]> {
    return this.http.get(`${this.baseurl}/AllReview`) as Observable<Request[]>;
  }

}
