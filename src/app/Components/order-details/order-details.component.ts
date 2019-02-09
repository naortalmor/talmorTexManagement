import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Order} from '../../Interfaces/order';
import {OrdersKeyMapper} from '../../Interfaces/keys-mapper';
import {StatusMapper} from '../../Interfaces/Statuses';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

@Inject({OrdersKeyMapper, StatusMapper})
export class OrderDetailsComponent implements OnInit {
  @Input() selectedOrder: Order;
  @Output() editOrderEmitter = new EventEmitter<Order>();
  @Output() deleteOrderEmitter = new EventEmitter<Order>();
  ordersDisplayValues;
  orderKeys: string[];
  statusMapper;
  icon;

  ngOnInit() {
    this.ordersDisplayValues = OrdersKeyMapper;
    this.orderKeys = Object.keys(OrdersKeyMapper);
    this.statusMapper = StatusMapper;
    this.icon = faCoffee;
  }

  onEdit() {
    this.editOrderEmitter.emit(this.selectedOrder);
  }

  onDelete() {
    this.deleteOrderEmitter.emit(this.selectedOrder);
  }
}
