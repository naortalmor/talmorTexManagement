import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert2';
import {Order} from '../../Interfaces/order';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})

export class NewOrderComponent implements OnInit {

  // order data
  customerName = '';
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
}
