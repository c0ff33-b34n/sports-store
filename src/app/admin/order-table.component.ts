import { Component, OnInit } from '@angular/core';
import { OrderRepository } from '../model/order.repository';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent {
  includeShipped = false;

  constructor(private orderRepo: OrderRepository) { }

  getOrders(): Order[] {
    return this.orderRepo.getOrders()
      .filter(o => this.includeShipped || !o.shipped);
  }

  markShipped(order: Order) {
    order.shipped = true;
    this.orderRepo.updateOrder(order);
  }

  delete(id: number) {
    this.orderRepo.deleteOrder(id);
  }
}
