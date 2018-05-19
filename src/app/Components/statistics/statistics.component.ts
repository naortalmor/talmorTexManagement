import {Component, Directive} from '@angular/core';
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
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent {
  // variables

  name: string;
  lastSupplyDate: Date;

  constructor() {
  }

  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  dateFormControl = new FormControl('', [
    Validators.required,
    this.dateValidator
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

