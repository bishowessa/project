import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  isAdmin = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    console.log("role ",this.isAdmin);
  }

}
