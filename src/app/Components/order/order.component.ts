import {Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {Order} from '../../Interfaces/order';
import swal from 'sweetalert2';
import {StatusMapper} from '../../Interfaces/Statuses';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

@Inject({StatusMapper})
export class OrderComponent implements OnInit {
  @Input() currOrder: Order;
  @Output() deleteOrder = new EventEmitter<Order>();
  @Output() editOrder = new EventEmitter<Order>();
  @Output() orderDetailsEmitter = new EventEmitter<void>();
  displayContent = false;
  editMode = false;
  statusMapper;

  ngOnInit() {
    this.statusMapper = StatusMapper;
  }

  collapse() {
    this.displayContent = !this.displayContent;
  }

  onEditOrder(order: Order) {
    this.editOrder.emit(order);
  }

  onDelete(order: Order) {
    swal({
      title: 'אתה בטוח?',
      text: 'האם אתה בטוח במחיקת ההזמנה?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'כן!',
      cancelButtonText: 'לא..',
      confirmButtonColor: '#ec6c62'
    }).then((result) => {
      if (result.value) {
        this.deleteOrder.emit(order);
      }
    });
  }

  onOrderClick() {
    this.orderDetailsEmitter.emit();
  }
}
