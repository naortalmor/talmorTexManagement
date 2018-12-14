import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Order} from '../../Interfaces/order';
import swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  @Input() currOrder: Order;
  @Output() deleteOrder = new EventEmitter<Order>();

  onDelete() {
    swal({
      title: 'Are you sure?',
      text: 'Are you sure that you want to delete this photo?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      confirmButtonColor: '#ec6c62'
    }).then((result) => {
      if (result.value) {
        this.deleteOrder.emit(this.currOrder);
      }
    });
  }
}
