import { Component, OnInit } from '@angular/core';
import {Order} from '../../Interfaces/order';
import {OredersService} from '../../Services/Orders/oreders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(private orderService: OredersService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(allOrders => this.orders = allOrders);
  }

  newOrder(): void {

  }
}
