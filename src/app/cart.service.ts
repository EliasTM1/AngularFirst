import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // define a items proprety that stores the array of current products in the cart
  items = [];
  constructor(private http: HttpClient) {}
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  cleartCart() {
    this.items = [];
    return this.items;
  }
}
