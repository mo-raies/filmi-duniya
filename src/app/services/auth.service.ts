import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) { }

  login(unname: string, pword: string): number {
    if (unname === 'raies' && pword === '1234') {
      return 200; // Success
    } else {
      return 403; // Unauthorized
    }
  }

  logout(){
    this.router.navigate(['login'])
  }


}
