import { Component } from '@angular/core';
import { Product, ProductService } from '../services/product.service'

@Component({
  selector: 'app-api-get',
  imports: [],
  templateUrl: './api-get.component.html',
  styleUrl: './api-get.component.css'
})
export class ApiGetComponent {
products: Product[] = [];

  constructor(private apiService: ProductService) {}

  loadProducts() {
    this.apiService.getProducts().subscribe({
      next: (res) => {
        this.products = res.products;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}
