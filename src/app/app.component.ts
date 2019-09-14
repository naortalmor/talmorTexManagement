import { SwalService } from './Services/sweet-alert/swal-service.service';
import { Views } from './enums/views.enums';
import { Observable } from 'rxjs';
import {Component} from '@angular/core';
import {OredersService} from './Services/Orders/oreders.service';
import {Order} from './Interfaces/order';
import { Store } from '@ngrx/store';
import { getOrders, addOrder, removeOrder, updateOrder } from './store/actions.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = 'orders';
  selectedTab = 'all';
  views = Views;
  orders$: Observable<Order[]>;
  orderToEdit: Order;

  constructor(private orderService: OredersService,
    private store: Store<{ orders: Order[]}>,
    private swalService:SwalService) {
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
      (newOrder:Order) => {
        this.store.dispatch(addOrder({order: newOrder}));
        this.swalService.swalSucess(`ההזמנה של ${newOrder.description} נוצרה בהצלחה`);
        this.goToAllOrders();
      },
      error => {
        console.log(error);
      });
  }

  updateOrderDetails(updatedOrder: Order) {
    this.orderService.updateOrder(updatedOrder).subscribe((res) => {
      this.swalService.swalSucess(`ההזמנה של ${res.description} עוכנה בהצלחה`);
      this.store.dispatch(updateOrder({order: res}));
      this.goToAllOrders();
    });
  }

  deleteOrder(orderToDelete: Order) {
    this.orderService.deleteOrder(orderToDelete).subscribe((res) => {
      this.swalService.swalSucess(`ההזמנה של ${res.description} נמחקה בהצלחה`);
      this.store.dispatch(removeOrder({orderId: res._id}));
      this.goToAllOrders();
    });
  }

  goToAllOrders() {
    this.view = 'orders';
    this.onChangeTab('all');
  }
}
