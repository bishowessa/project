import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-meal-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.css'
})
export class MealDetailsComponent implements OnInit {

  http = inject(HttpClient);
  route = inject(ActivatedRoute);
  meal: any = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.fetchMealDetails(id);
      }
    });
  }

  fetchMealDetails(id: string) {
    this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe((response: any) => {
        this.meal = response.meals[0];
      }, error => {
        console.error('Error fetching meal details:', error);
      });
  }
}


