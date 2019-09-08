import { Statuses } from './../Interfaces/Statuses';
import { Order } from './../Interfaces/order';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'ordersToView'})
export class OrdersToView implements PipeTransform {
  transform(orders:Order[], tab:string):Order[] {
    let result:Order[];
    switch (tab) {
      case('done'):
        result = orders.filter(curr => curr.status === Statuses.Done);
        break;
      case ('new'):
        result = orders.filter(curr => curr.status === Statuses.New);
        break;
      case ('inProgress'):
        result = orders.filter(curr => curr.status !== Statuses.New && curr.status !== Statuses.Done);
        break;
      default:
        result = orders;
    }

    return result;
  }
}
