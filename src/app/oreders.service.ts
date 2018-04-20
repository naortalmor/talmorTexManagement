import { Injectable } from '@angular/core';
import {Order} from './order';
import {ORDERS} from './mock-orders';
import { of } from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OredersService {

  constructor() { }

  getOrders(): Observable<Order[]> {
    return of (ORDERS);
  }
}
