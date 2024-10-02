import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.css'
})
export class DisplayUsersComponent implements OnInit {
  http = inject(HttpClient);
  router = inject(Router);
  users: any[] = []; // Initialize users array

  ngOnInit(): void {
      this.fetchUsers();
  }

  editUser(user: any) {
    this.router.navigate(['/editUser'], { state: { userData: user } });
  }

  fetchUsers() {
      this.http.get('http://localhost:3005/user', { withCredentials: true })
          .subscribe(response => {
              this.users = response as any[]; // Assuming the response is an array of users
          }, error => {
              console.error('Error fetching users:', error);
          });
  }

  deleteUser(userId: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`http://localhost:3005/user/deleteUser/${userId}`, { withCredentials: true })
        .subscribe(response => {
          console.log('User deleted:', response);
          this.fetchUsers(); // Refresh the user list after deletion
        }, error => {
          console.error('Error deleting user:', error);
        });
    }
  }

}
