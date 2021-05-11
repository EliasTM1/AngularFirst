import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: []
})
export class ProductAlertComponent {
  @Input() product;

  @Output() notify = new EventEmitter();

  constructor() {}
}
