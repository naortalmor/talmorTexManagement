import {Component} from '@angular/core';
import {OredersService} from './Services/Orders/oreders.service';
import {Order} from './Interfaces/order';
import {Statuses} from './Interfaces/Statuses';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = 'orders';
  allOrders: Observable<Order[]>;
  selectedOrder: Order;
  newOrders: Order[];
  inProgOrders: Order[];
  doneOrders: Order[];

  constructor(private orderService: OredersService) {
    this.allOrders = this.orderService.getOrders();
  }

  onViewChanges(viewToDisplay: string) {
    this.view = viewToDisplay;
  }

  onOrderSelected(selectedOrder: Order) {
    this.selectedOrder = selectedOrder;
  }
}
