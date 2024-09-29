import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  
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
  }).subscribe(response => {
      console.log('Response:', response);
  }, error => {
      console.error('Error:', error);
  });
}

  ngOnInit(): void {
    
  }

}
