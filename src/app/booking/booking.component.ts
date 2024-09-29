import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit{

//   http = inject(HttpClient)

//   formdata : any;
//   fetchData(e : any){
//   e.preventDefault()//3lshan amn3 el submit mn enha t refresh

//   this.formdata = new FormData(e.target)

//   console.log(e.target)
//   console.log(this.formdata.get('bookingName'))

//   this.http.post('http://localhost:3005/book', this.formdata).subscribe(response=>console.log(response))
  
// }

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
  }).subscribe(response => {
      console.log('Response:', response);
  }, error => {
      console.error('Error:', error);
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



