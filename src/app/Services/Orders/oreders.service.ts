import { Injectable } from '@angular/core';
import {Order} from '../../Interfaces/order';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OredersService {

  ordersURI = 'http://localhost:1111/orders';

  constructor(private http: HttpClient) {
}

  getOrders(): Observable<Order[]> {
    return (this.http.get<Order[]>(this.ordersURI));
  }
}
