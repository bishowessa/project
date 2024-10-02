import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { jwtDecode } from 'jwt-decode';  // Named import

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) {}

  getToken(): string {
    return this.cookieService.get('jwt');  // Retrieve the JWT token from the cookie
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);  // Use jwtDecode to decode the token
      return decodedToken.role === 'admin';  // Check if the user is an admin
      console.log(decodedToken);
    }
    return false;
  }
}
