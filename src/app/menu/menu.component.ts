import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  http = inject(HttpClient);
  router = inject(Router);
  meals: any[] = [];

  ngOnInit(): void {
    this.fetchMeals();
  }

  fetchMeals() {
    this.http.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .subscribe((response: any) => {
        this.meals = response.meals;
      }, error => {
        console.error('Error fetching meals:', error);
      });
  }

  viewMealDetails(id: string) {
    this.router.navigate(['/meal', id]);
  }
}

// window.onload = function() {
//   const apiURL = 'https://dummyjson.com/products';
//   const productList = document.getElementById('product-list');

//   // Fetch products from the API
//   fetch(apiURL)
//       .then(response => response.json())
//       .then(data => {
//           console.log(data);  // Logs the raw data for debugging

//           if (data && data.products) {
//             data.products.forEach((product: any)  => {
//                   const productBlock = document.createElement('div');
//                   productBlock.classList.add('product-block');

//                   // Create HTML structure for product details
//                   productBlock.innerHTML = `
//                       <img class="product-image" src="${product.thumbnail}" alt="${product.title}">
//                       <span class="product-title">${product.title}</span><br>
//                       <span class="product-price">$${product.price}</span>
//                       <p class="product-description">${product.description}</p>
//                   `;

//                 if (productList) {
//                   productList.appendChild(productBlock);
//                 } else {
//                   console.error("productList is null.");
//                 }
//               });
//           } else {
//               console.error("No products found in the response.");
//           }
//       })
//       .catch(error => {
//           console.error('Error fetching data:', error);
//       });
// };
