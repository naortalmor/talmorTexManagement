import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import swal from 'sweetalert2';
import {Order} from '../../Interfaces/order';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {Statuses} from '../../Interfaces/Statuses';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted ;
    return (control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})

export class NewOrderComponent {
  newOrder: Order = new Order();
  @Output() createOrder = new EventEmitter<Order>();

  constructor() {
  }

  onSubmit() {
    this.newOrder.description = this.newOrder.customerName + ' מעיר כלשהי';
    this.newOrder.orderDate = new Date();
    this.newOrder.status = Statuses.New;
    this.createOrder.emit(this.newOrder);
  }
}
