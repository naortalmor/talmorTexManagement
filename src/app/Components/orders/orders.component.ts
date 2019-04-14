import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Order} from '../../Interfaces/order';
import {OredersService} from '../../Services/Orders/oreders.service';
import {Statuses} from '../../Interfaces/Statuses';
import {TabsInfo} from '../../Interfaces/tabs-info';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  @Input() orders;
  @Input() selectedTab;
  @Input() allOrders;
  @Output() tabChangedEmitter = new EventEmitter<string>();
  @Output() updateOrder = new EventEmitter<Order>();
  @Output() deleteOrder = new EventEmitter<Order>();
  @Output() newOrderEmitter = new EventEmitter<void>();
  ordersToDisplay: Order[] = [];

  tabChanged(tab: string) {
    this.tabChangedEmitter.emit(tab);
  }

  onEditOrder(order: Order) {
    this.updateOrder.emit(order);
  }

  onDeleteOrder(order: Order) {
    this.deleteOrder.emit(order);
  }

  createNewOrder() {
    this.newOrderEmitter.emit();
  }

  displayOrderCard(order: Order) {
    this.ordersToDisplay.push(order);
  }
}
