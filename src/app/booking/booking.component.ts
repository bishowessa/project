import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{

successMessage : string | null = null;
failMessage : string | null = null;
fail : boolean = false;

http = inject(HttpClient)

formdata: any;

fetchData(e: Event) {
  e.preventDefault(); // Prevent page refresh
  const formData = new FormData((e.target as HTMLFormElement)); // Get form data
  
  console.log('Form Data:', formData.get('bookingDate'), formData.get('bookingTime'), formData.get('bookingName'), formData.get('bookingPhone'), formData.get('bookingPersons'));

  this.http.post('http://localhost:3005/book', {
      bookingDate: formData.get('bookingDate'),
      bookingTime: formData.get('bookingTime'),
      bookingName: formData.get('bookingName'),
      bookingPhone: formData.get('bookingPhone'),
      bookingPersons: formData.get('bookingPersons')
  }, { withCredentials: true }).subscribe(response => {
      console.log('Response:', response);
      this.successMessage = 'Booking created successfully!';
      setTimeout(() => {
          this.successMessage = null;
      }, 3000);
  }, error => {
      console.error('Error:', error);
      this.failMessage = 'Failed to create booking.you need to login first';
      this.fail = true
      setTimeout(() => {
          this.failMessage = null;
      }, 3000);
  });
}


  ngOnInit(): void {
  }


// fetchData(e: any) {
//   e.preventDefault(); // Prevent page refresh on form submission

//   // Create new FormData from the form submission
//   this.formdata = new FormData(e.target);

//   console.log(e.target);
//   console.log(this.formdata.get('bookingName'));

//   // Send form data to the backend using HttpClient
//   this.http.post('http://localhost:3005/book', this.formdata,).subscribe(
//     response => console.log(response),
//     error => console.error(error)
//   );
}



