import { Routes, CanActivate } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { MenuComponent } from './menu/menu.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { Component } from '@angular/core';
import { SecondSectionComponent } from './second-section/second-section.component';
import { AdminGuardComponent } from './admin-guard/admin-guard.component';
import { MealDetailsComponent } from './meal-details/meal-details.component';

export const routes: Routes = [

    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'home',
        component: LandingComponent, 
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
        component : AdminDashboardComponent,
        // canActivate : [AdminGuardComponent]
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
        component : EditUserComponent
    },
    {
        path:'addAdmin',
        component : AddAdminComponent
    },{
        path: 'meal/:id',
        component: MealDetailsComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
