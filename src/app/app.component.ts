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
  selectedTab = 'all';
  selectedOrder: Order;
  allOrders: Order[];
  orders: Order[];

  constructor(private orderService: OredersService) {
    this.orderService.getOrders().subscribe((orders) => {
      this.allOrders = orders;
      this.orders = orders;
    });
  }

  onViewChanges(viewToDisplay: string) {
    this.view = viewToDisplay;
  }

  onChangeTab(tab: string) {
    this.selectedTab = tab;
    switch (tab) {
      case('all'):
        this.orders = this.allOrders;
        break;
      case('done'):
        this.orders = this.allOrders.filter(curr => curr.status == Statuses.Done);
        break;
      case ('new'):
        this.orders = this.allOrders.filter(curr => curr.status == Statuses.New);;
        break;
      case ('inProgress'):
        this.orders = this.allOrders.filter(curr => curr.status != Statuses.New && curr.status != Statuses.Done);
        break;
    }
  }
}
