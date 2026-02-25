import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products {
  cartCount = 0;
  totalPrice = 0;
  cartMessage = '';

  products = [
    { name: 'Rose Élégance', price: 2499, available: true, category: 'Floral', emoji: '🌹' },
    { name: 'Ocean Mist', price: 1899, available: true, category: 'Fresh', emoji: '🌊' },
    { name: 'Midnight Oud', price: 3299, available: false, category: 'Oriental', emoji: '🌙' },
    { name: 'Citrus Bloom', price: 1599, available: true, category: 'Fresh', emoji: '🍋' },
    { name: 'Forest Dew', price: 2199, available: true, category: 'Woody', emoji: '🌿' },
    { name: 'Velvet Orchid', price: 2799, available: false, category: 'Floral', emoji: '🪷' },
  ];

  addToCart(product: any) {
    if (product.available) {
      this.cartCount++;
      this.totalPrice += product.price;
      this.cartMessage = product.name + ' added to cart!';
      setTimeout(() => { this.cartMessage = ''; }, 2500);
    }
  }
}