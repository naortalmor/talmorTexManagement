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
  customerName = 'NARO';
  lastDate: Date;
  height: number;
  width: number;
  cost: number;
  today: Date = new Date();
  // booleans for validation
  isNameOk:   Boolean = true;
  isheightOk: Boolean = true;
  isWidthOl:  Boolean = true;
  isCostOk:   Boolean = true;
  isDateOk:   Boolean = true;

  // new variables

  name: string;
  lastSupplyDate: Date;


  constructor() {
  }

  ngOnInit() {
    console.log(this.today);
  }

  commitNewOrder() {
    if (this.checkInputValidation()) {
      swal({
        title: 'בתהליך ..',
        timer: 1000,
        onOpen: () => {
          swal.showLoading();
        }
      }).then(() => {
        swal(
          'הזמנה נוספה!',
          'ההזמנה של ' + this.customerName + ' התווספה בהצלחה!',
          'success'
        );
      });
    }
  }

  private checkInputValidation(): Boolean {
    if (this.customerName !== '' && this.lastDate !== undefined) {
      this.isNameOk = true;
      this.isDateOk = true;
      return true;
    } else {
      if (this.customerName === '') {
        this.isNameOk = false;
        swal({
          type: 'error',
          title: 'קלט שגוי !',
          text: 'נא הכנס שם לקוח ..'
        });
      } else if (this.lastDate === undefined) {
        this.isDateOk = false;
        swal({
          type: 'error',
          title: 'קלט שגוי !',
          text: 'נא הכנס תאריך אחרון לאספקה ..'
        });
      } else if (this.today > new Date(this.lastDate)) {
          this.isDateOk = false;
          this.lastDate = new Date(this.lastDate);
          swal({
           type: 'error',
           title: 'קלט שגוי !',
           text: 'נא הכנס תאריך אחרון לאספקה אשר גדול מהיום ..'
         });
      }
    }
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
