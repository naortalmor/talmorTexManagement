import {Component} from '@angular/core';
import {OredersService} from './Services/Orders/oreders.service';
import {Order} from './Interfaces/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = 'orders';
  allOrders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OredersService) {
    this.orderService.getOrders().subscribe((orders) => {
      this.allOrders = orders;
    });
  }

  onViewChanges(viewToDisplay: string) {
    this.view = viewToDisplay;
  }

  onOrderSelected(selectedOrder: Order) {
    this.selectedOrder = selectedOrder;
  }
}
