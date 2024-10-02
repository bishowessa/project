import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setLoggedIn(state: boolean): void {
    this.loggedIn = state;
  }
}
