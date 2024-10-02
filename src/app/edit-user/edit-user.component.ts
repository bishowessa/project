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
  phone: string = '';
  address: string = '';
  successMessage: string | null = null;

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
      this.phone = user.phone;
      this.address = user.address;
    });
  }
  
  updateUser(e: Event) {
    e.preventDefault(); // Prevent page refresh
    const formData = new FormData((e.target as HTMLFormElement)); // Get form data
    
    const user: any = {};
    
    // Only include non-empty fields in the update
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;
    const phone = formData.get('phone') as string;
    const address = formData.get('address') as string;
    
    if (name) user.name = name;
    if (password) user.password = password;
    if (phone) user.phone = phone;
    if (address) user.address = address;
    
    user.email = this.email;

    this.http.patch('http://localhost:3005/user/updateUser/' + this.email, user, { withCredentials: true })
    .subscribe(response => {
      console.log('Response:', response);
      // Set success message and reset it after a few seconds
      this.successMessage = 'User data has been updated successfully!';
      setTimeout(() => {
        this.successMessage = null;
      }, 3000); // Hide message after 3 seconds
    }, error => {
      console.error('Error:', error);
    });
  }
}