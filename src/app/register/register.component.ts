import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  http = inject(HttpClient)

  fetchData(e: Event) {
    e.preventDefault(); // Prevent page refresh
    const formData = new FormData((e.target as HTMLFormElement)); // Get form data

    const user = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string
    };

    console.log('User Data:', user);

    this.http.post('http://localhost:3005/user/register', user)
      .subscribe(response => {
        console.log('Response:', response);
      }, error => {
        console.error('Error:', error);
      });
  }

  ngOnInit(): void {}
}
