import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [

    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'home',
        component: LandingComponent
    },
    { 
        path: 'contact',
        component: ContactComponent 
    },
    {
        path: 'menu',
        component: MenuComponent
    },
    {
        path: 'booking',
        component: BookingComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
