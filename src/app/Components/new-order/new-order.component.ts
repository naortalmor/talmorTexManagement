import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import {Order} from '../../Interfaces/order';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


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

export class NewOrderComponent implements OnInit {

  // order data
  name: string;
  phone: string;
  email: string;
  today: Date = new Date();
  lastSupplyDate: Date;
  height: number;
  width: number;
  cost: number;

  constructor() {
  }

  ngOnInit() {
    console.log(this.today);
  }

  commitNewOrder() {
    alert('new order - ' + this.name + ', ' + this.phone + ', ' + this.email);
  }

  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
  ])
  emailFormControl = new FormControl('', [
    Validators.email
  ]);
  dateFormControl = new FormControl('', [
    Validators.required,
    this.dateValidator
  ]);
  widthFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0)
  ]);
  heightFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0)
  ]);
  costFormControl = new FormControl('', [
    Validators.required,
    Validators.min(0)
  ]);

  matcher = new MyErrorStateMatcher();

  dateValidator(control: FormControl): { [key: string]: boolean } | null {
    const today = new Date();
    if (control.value !== undefined ) {
      const supplyDate = new Date(control.value);
      if (supplyDate > today) {
        return null;
      } else {
        return {'validDate': true};
      }
    }
    return null;
  }
}
