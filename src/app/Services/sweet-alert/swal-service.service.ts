import swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Injectable()
export class SwalService {
  swalSucess(text:string):void {
    swal.fire({
      title: 'בוצע',
      text,
      type: 'success'
    });
  }
}
