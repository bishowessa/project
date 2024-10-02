import { Component } from '@angular/core';
import { CanActivate, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-guard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './admin-guard.component.html',
  styleUrl: './admin-guard.component.css'
})
export class AdminGuardComponent implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    console.log(this.authService.isAdmin());
    if (this.authService.isAdmin()) {
      return true;  // User is admin, allow access
    } else {
      this.router.navigate(['/home']);  // Redirect to home if not admin
      return false;
    }
  }

}
