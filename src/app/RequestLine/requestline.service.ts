import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {RequestLine} from './requestline.class';


@Injectable({
  providedIn: 'root'
})
export class RequestLineService {

  baseurl: string = "http://localhost:5185/api/requestLines";

  constructor(private http: HttpClient)
  {  }



  get(id: number): Observable<RequestLine>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<RequestLine>;
  }

  create(reqline: RequestLine): Observable<RequestLine>{
    return this.http.post(`${this.baseurl}`, reqline) as Observable<RequestLine>;
  }

  edit(reqline: RequestLine): Observable<any>{
    return this.http.put(`${this.baseurl}/${reqline.id}`, reqline) as Observable<any>;
  }

  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
