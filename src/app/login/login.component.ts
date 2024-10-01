import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  http = inject(HttpClient) 

  
formdata: any;

fetchData(e: Event) {
  e.preventDefault(); // Prevent page refresh
  const formData = new FormData((e.target as HTMLFormElement)); // Get form data

  const user = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  };

  console.log('User Data:', user);

  this.http.post('http://localhost:3005/user/login', user,{withCredentials: true})
    .subscribe(response => {
      console.log('Response:', response);
    }, error => {
      console.error('Error:', error);
    });
}

ngOnInit(): void {}



}
