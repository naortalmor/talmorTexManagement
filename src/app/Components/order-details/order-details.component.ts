import {Component, Input} from '@angular/core';
import {Order} from '../../Interfaces/order';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})

export class OrderDetailsComponent {
  @Input() selectedOrder: Order;
}
