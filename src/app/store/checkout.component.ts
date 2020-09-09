import { Component, OnInit } from '@angular/core';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  orderSent = false;
  submitted = false;

  constructor(public orderRepo: OrderRepository,
              public order: Order) {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderRepo.saveOrder(this.order).subscribe(
        order => {
          this.order.clear();
          this.orderSent = true;
          this.submitted = false;
        }
      );
    }
  }
}
