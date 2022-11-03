import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './User.class';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:5185/api/Users";

  constructor(private http: HttpClient)
  {  }

  login(userName: string, password: string): Observable<User>{
    return this.http.get(`${this.baseurl}/${userName}/${password}`) as Observable<User>;
  }

  list(): Observable<User[]> {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }

  get(id: number): Observable<User>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }

  create(use: User): Observable<User>{
    return this.http.post(`${this.baseurl}`, use) as Observable<User>;
  }

  edit(use: User): Observable<any>{
    return this.http.put(`${this.baseurl}/${use.id}`, use) as Observable<any>;
  }

  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
