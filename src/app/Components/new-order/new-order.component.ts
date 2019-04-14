import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Order} from '../../Interfaces/order';
import {Statuses, StatusMapper} from '../../Interfaces/Statuses';
import swal from 'sweetalert2';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})

@Inject({Statuses, StatusMapper})
export class NewOrderComponent implements OnChanges, OnInit {
  @Input() isEditMode: Boolean;
  @Input() orderToEdit: Order;
  @Output() createOrder = new EventEmitter<Order>();
  @Output() updateOrder = new EventEmitter<Order>();
  @Output() cancel = new EventEmitter<void>();
  newOrder: Order = new Order();
  statusesKeys = [];
  statusSelected;

  ngOnInit() {
    for (const curr of Object.keys(Statuses)) {
      if (StatusMapper[curr]) {
        this.statusesKeys.push(StatusMapper[curr]);
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['orderToEdit'] && changes['orderToEdit'].currentValue) {
      this.newOrder = this.orderToEdit;
      this.statusSelected = StatusMapper[this.orderToEdit.status.toString()];
    }
  }

  onSave() {
    this.newOrder.description = `${this.newOrder.customerName} מ${this.newOrder.city}`;
    if (this.isEditMode) {
      this.newOrder.status = +StatusMapper[this.statusSelected];
      this.updateOrder.emit(this.newOrder);
    } else {
      this.newOrder.orderDate = new Date();
      this.newOrder.status = Statuses.New;
      this.createOrder.emit(this.newOrder);
    }
  }

  onCanel() {
    this.cancel.emit();    
  }
}
