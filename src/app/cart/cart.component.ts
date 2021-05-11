import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: []
})
export class CartComponent implements OnInit {
  items = this.CartService.getItems();

  // Using the FormBuilder > group() method set the checkOut form property to a form model containing name and address fields

  checkOutForm = this.FormBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private CartService: CartService,
    private FormBuilder: FormBuilder
  ) {}

  onSumbmit(): void {
    //Process the checkout Data here
    this.items = this.CartService.cleartCart();
    console.warn('Your Order has been placed', this.checkOutForm.value);
  }

  ngOnInit() {}
}
