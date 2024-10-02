import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

fail : boolean = false
successMessage : string | null = null
failMessage : string | null = null

http = inject(HttpClient)

formdata: any;

fetchData(e: Event) {
  e.preventDefault(); // Prevent page refresh
  const formData = new FormData((e.target as HTMLFormElement)); // Get form data
  
  console.log('Form Data:', formData.get('contactName'), formData.get('contactEmail'), formData.get('contactSubject'), formData.get('contactMessage'));

  this.http.post('http://localhost:3005/contact', {
    contactName: formData.get('contactName'),
    contactEmail: formData.get('contactEmail'),
    contactSubject: formData.get('contactSubject'), 
    contactMessage: formData.get('contactMessage'),
  }, { withCredentials: true }).subscribe(response => {
      console.log('Response:', response);
      this.successMessage = 'message created successfully!';
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
  }, error => {
      console.error('Error:', error);
      this.failMessage = 'Failed to create contact. You need to login first.';
      this.fail = true
      setTimeout(() => {
        this.failMessage = null;
      }, 3000);
  });
}

  ngOnInit(): void {
    
  }

}
