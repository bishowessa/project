import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit {
  http = inject(HttpClient);
  route = inject(ActivatedRoute);

  email: string | null = null;
  name: string = '';
  password: string = '';
  phone: string = '';
  address: string = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.email = params.get('email');
      if (this.email) {
        this.fetchUserDetails(this.email);
      }
    });
  }

  fetchUserDetails(email: string) {
    this.http.get(`http://localhost:3005/user/${email}`, { withCredentials: true })
    .subscribe((user: any) => {
      this.name = user.name;
      this.password = user.password;
      this.phone = user.phone;
      this.address = user.address;
    });
  }
  
  
  updateUser(e: Event) {
    e.preventDefault(); // Prevent page refresh
    const formData = new FormData((e.target as HTMLFormElement)); // Get form data
    
    const user = {
      name: formData.get('name') as string,
      email: this.email,
      password: formData.get('password') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string
    };
    
    console.log('User Data:', user);
    
    this.http.patch('http://localhost:3005/user/updateUser/' + this.email, user, { withCredentials: true })
    .subscribe(response => {
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
  }
  
}