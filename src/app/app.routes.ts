import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

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
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },{
        path: 'admin',
        component : AdminDashboardComponent
    },{
        path : 'displayUsers',
        component : DisplayUsersComponent
    },
    {
        path: 'editUser/:email',
        component : EditUserComponent
    },
    {
        path: 'editUser',
        component : EditUserComponent},
    {
        path: '**',
        redirectTo: 'home'
    }
];
