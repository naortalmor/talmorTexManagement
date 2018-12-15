import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Order} from '../../Interfaces/order';
import {OredersService} from '../../Services/Orders/oreders.service';
import {Statuses} from '../../Interfaces/Statuses';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnChanges {
  @Input() newOrders;
  @Input() inProgressOrders;
  @Input() doneOrders;
  @Input() allOrders;
  @Output() orderSelected = new EventEmitter<Order>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['allOrders'] && changes['allOrders'].currentValue) {
      this.newOrders = this.allOrders.filter(curr => curr.status == Statuses.New);
      this.doneOrders = this.allOrders.filter(curr => curr.status == Statuses.Done);
      this.inProgressOrders = this.allOrders.filter(curr => curr.status != Statuses.New && curr.status != Statuses.Done);
    }
  }

  onSelectedOrder(order: Order) {
    this.orderSelected.emit(order);
  }
}
