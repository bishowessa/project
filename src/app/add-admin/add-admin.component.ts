import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css'
})
export class AddAdminComponent {
  http = inject(HttpClient);

  successMessage: string | null = null;
  errorMessage: string | null = null;

  displaySuccessMessage(message: string) {
    this.successMessage = message;
    setTimeout(() => {
      this.successMessage = null;
    }, 3000);
  }

  displayErrorMessage(message: string) {
    this.errorMessage = message;
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000);
  }

  addAdmin(e: Event) {
    e.preventDefault(); // Prevent page refresh
    const formData = new FormData((e.target as HTMLFormElement)); // Get form data

    const admin = {
      email: formData.get('email') as string,
    };

    this.http.post('http://localhost:3005/user/addAdmin', admin, { withCredentials: true })
      .subscribe(response => {
        this.displaySuccessMessage('Admin created successfully!');
      }, error => {
        this.displayErrorMessage('Error creating admin.');
      });
  }
}


