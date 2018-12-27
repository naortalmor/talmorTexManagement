import {Component, Inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Order} from '../../Interfaces/order';
import {OrdersKeyMapper} from '../../Interfaces/keys-mapper';
import {StatusMapper} from '../../Interfaces/Statuses';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

@Inject({OrdersKeyMapper, StatusMapper})
export class OrderDetailsComponent implements OnInit {
  @Input() selectedOrder: Order;
  ordersDisplayValues;
  orderKeys: string[];
  statusMapper;

  ngOnInit() {
    this.ordersDisplayValues = OrdersKeyMapper;
    this.orderKeys = Object.keys(OrdersKeyMapper);
    this.statusMapper = StatusMapper;
  }
}
