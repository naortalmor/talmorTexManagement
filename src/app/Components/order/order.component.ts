import {Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import {Order} from '../../Interfaces/order';
import swal from 'sweetalert2';
import {StatusMapper} from '../../Interfaces/Statuses';
import { transition, animate, trigger, state, style } from '@angular/animations';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  animations: [
    trigger('iconToggle', [
      state('open', style({
        transform: 'rotateX(180deg)'
      })),
      transition('open => close', [
        animate('500ms ease')
      ]),
      transition('close => open', [
        animate('500ms ease')
      ])
    ])
  ]
})

@Inject({StatusMapper})
export class OrderComponent implements OnInit {
  @Input() currOrder: Order;
  @Output() deleteOrder = new EventEmitter<Order>();
  @Output() updateOrder = new EventEmitter<Order>();
  @Output() orderDetailsEmitter = new EventEmitter<void>();
  statusMapper;
  bool: boolean;
  view:string = '';

  ngOnInit() {
    this.statusMapper = StatusMapper;
  }

  onDelete(order: Order) {
    swal.fire({
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

  onEdit(order: Order) {
    // this.editOrder.emit(order);
    this.view = 'edit';
  }

  onOrderClick() {
    this.orderDetailsEmitter.emit();
    this.toggleOrder();
  }

  updateOrderDetails(order:Order) {
    this.updateOrder.emit(order);
    this.toggleOrder();
  }

  toggleOrder() {
    this.bool = !this.bool;
    this.view = '';
  }
}
