import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Order} from '../../Interfaces/order';
import {OredersService} from '../../Services/Orders/oreders.service';
import {Statuses} from '../../Interfaces/Statuses';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnChanges {
  @Input() orders;
  @Output() orderSelected = new EventEmitter<Order>();
  newOrders: Order[] = [];
  inProgressOrders: Order[] = [];
  doneOrders: Order[] = []

  ngOnChanges(changes: SimpleChanges) {
    if (changes['orders']) {
      this.newOrders = (changes['orders'].currentValue as Order[]).filter(curr => curr.status === Statuses.New);
    }
  }

  onSelectedOrder(order: Order) {
    this.orderSelected.emit(order);
  }
}
