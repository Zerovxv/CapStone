import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SystemService {

  baseurl: string ="http//localhost:5185/api";

  user: any = null;





  constructor(
    private router: Router
  ){}

  ChkLogin(): void {
    if(this.user === null) {
      this.router.navigateByUrl("/user/login")
    }
  }
}
