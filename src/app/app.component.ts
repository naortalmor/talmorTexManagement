import {Component} from '@angular/core';
import {OredersService} from './Services/Orders/oreders.service';
import {Order} from './Interfaces/order';
import {Statuses} from './Interfaces/Statuses';
import swal from 'sweetalert2';
import {TabsInfo} from './Interfaces/tabs-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  view = 'orders';
  selectedTab = 'all';
  allOrders: Order[];
  orders: Order[];
  orderToEdit: Order;
  tabsInfo: TabsInfo = {};
  ordersToDisplay: Order[] = [];

  constructor(private orderService: OredersService) {
    this.orderService.getOrders().subscribe((orders) => {
      this.allOrders = orders;
      this.orders = orders;
      this.tabsInfo['all'] = this.orders.length;
      this.tabsInfo['new'] = this.orders.filter(curr => curr.status === Statuses.New).length;
      this.tabsInfo['done'] = this.orders.filter(curr => curr.status === Statuses.Done).length;
      this.tabsInfo['inProgress'] = this.tabsInfo['all'] - (this.tabsInfo['new'] + this.tabsInfo['done']);
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
        this.orders = this.allOrders.filter(curr => curr.status === Statuses.Done);
        break;
      case ('new'):
        this.orders = this.allOrders.filter(curr => curr.status === Statuses.New);
        break;
      case ('inProgress'):
        this.orders = this.allOrders.filter(curr => curr.status !== Statuses.New && curr.status !== Statuses.Done);
        break;
    }
  }

  createNewOrder(newOrder: Order) {
    this.orderService.newOrder(newOrder).subscribe(
      (res) => {
        swal({
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

  editOrder(order: Order) {
    this.orderToEdit = order;
    this.view = 'edit';
  }

  updateOrderDetails(updatedOrder: Order) {
    this.orderService.updateOrder(updatedOrder).subscribe((res) => {
      swal({
        title: 'בוצע',
        text: `ההזמנה של ${res.description} עוכנה בהצלחה`,
        type: 'success'
      });
      this.updateOrdersArray('edit', res);
    });
  }

  deleteOrder(orderToDelete: Order) {
    this.orderService.deleteOrder(orderToDelete).subscribe((res) => {
      swal({
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
    this.view = 'orders';
    this.onChangeTab('all');
  }

  displayOrderDetails(order: Order) {
    this.ordersToDisplay.push(order);
  }
}
