import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Request} from './request.class';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string = "http://localhost:5185/api/requests";


  constructor(private http: HttpClient)
  {  }

  setToReview(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/review/${request.id}`, request) as Observable<any>;
  }

  approve(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/approve/${request.id}`, request) as Observable<any>;}

    reject(request: Request): Observable<any> {
      return this.http.put(`${this.baseurl}/reject/${request.id}/${request.rejectionReason}`, request) as Observable<any>;
    }

  review(id: number, req: Request) : Observable<Request> {
    return this.http.put(`!${this.baseurl}/Review/${id}`, req) as Observable<Request>;
  }



  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }

  get(id: number): Observable<Request>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }

  create(req: Request): Observable<Request>{
    return this.http.post(`${this.baseurl}`, req) as Observable<Request>;
  }

  edit(req: Request): Observable<any>{
    return this.http.put(`${this.baseurl}/${req.id}`, req) as Observable<any>;
  }

  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
