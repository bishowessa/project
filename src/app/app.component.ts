import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from "./menu/menu.component";
import { BookingComponent } from "./booking/booking.component";
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LandingComponent, FooterComponent, ContactComponent, MenuComponent, BookingComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
