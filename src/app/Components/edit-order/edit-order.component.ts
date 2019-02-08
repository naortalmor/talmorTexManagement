import {Component, Inject, Input, OnInit} from '@angular/core';
import {StatusMapper} from '../../Interfaces/Statuses';
import {OrdersKeyMapper} from '../../Interfaces/keys-mapper';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})

@Inject({OrdersKeyMapper, StatusMapper})
export class EditOrderComponent implements OnInit {
  @Input() orderToEdit;

  ordersDisplayValues;
  orderKeys: string[];
  statusMapper;

  ngOnInit() {
    this.ordersDisplayValues = OrdersKeyMapper;
    this.orderKeys = Object.keys(OrdersKeyMapper);
    this.statusMapper = StatusMapper;
  }

  onSave() {

  }
}
