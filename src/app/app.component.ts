import { Views } from './enums/views.enums';
import { Observable } from 'rxjs';
import {Component} from '@angular/core';
import {OredersService} from './Services/Orders/oreders.service';
import {Order} from './Interfaces/order';
import swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { getOrders } from './store/actions.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = 'orders';
  selectedTab = 'all';
  allOrders: Order[];
  views = Views;
  orders$: Observable<Order[]>;
  orderToEdit: Order;

  constructor(private orderService: OredersService,
    private store: Store<{ orders: Order[]}>) {
      this.store.dispatch(getOrders());
      this.orders$ = this.store.select('orders');
  }

  onViewChanges(viewToDisplay: string) {
    this.view = viewToDisplay;
  }

  onChangeTab(tab: string) {
    this.selectedTab = tab;
  }

  createNewOrder(newOrder: Order) {
    this.orderService.newOrder(newOrder).subscribe(
      (res) => {
        swal.fire({
          title: 'בוצע',
          text: `ההזמנה של ${res.description} נוצרה בהצלחה`,
          type: 'success'
        });
        this.updateOrdersArray('add', res);
      },
      error => {
        console.log(error);
      });
  }

  updateOrderDetails(updatedOrder: Order) {
    this.orderService.updateOrder(updatedOrder).subscribe((res) => {
      swal.fire({
        title: 'בוצע',
        text: `ההזמנה של ${res.description} עוכנה בהצלחה`,
        type: 'success'
      });
      this.updateOrdersArray('edit', res);
    });
  }

  deleteOrder(orderToDelete: Order) {
    this.orderService.deleteOrder(orderToDelete).subscribe((res) => {
      swal.fire({
        title: 'בוצע',
        text: `ההזמנה של ${res.description} נמחקה בהצלחה`,
        type: 'success'
      });
      this.updateOrdersArray('delete', res);
    });
  }

  updateOrdersArray(action: string, order: Order) {
    switch (action) {
      case 'add':
        this.allOrders.push(order);
        break;
      case 'edit':
        this.allOrders.map((curr) => {
          if (curr.id === order.id) {
            return order;
          } else {
            return curr;
          }
        });
        break;
      case 'delete':
        const index = this.allOrders.lastIndexOf(order);
        this.allOrders.splice(index, 1);
        break;
    }
    this.goToAllOrders();
  }

  goToAllOrders() {
    this.view = 'orders';
    this.onChangeTab('all');
  }
}
