import { initOrders } from './../../store/actions.constants';
import { Injectable } from '@angular/core';
import {Order} from '../../Interfaces/order';
import {HttpClient} from '@angular/common/http';
import { Store, props } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class OredersService {
  ordersURI = 'http://localhost:1111/orders';

  constructor(private http: HttpClient,
              private store: Store<{orders: Order[]}>) {
  }

  getOrders(): Observable<Order[]> {
    return (this.http.get<Order[]>(this.ordersURI));
  }

  newOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersURI, order);
  }

  updateOrder(updatedOrder: Order): Observable<Order> {
    const updateURI = this.ordersURI + '/update';
    return this.http.post<Order>(updateURI, updatedOrder);
  }

  deleteOrder(order: Order): Observable<any> {
    const updateURI = this.ordersURI + '/delete';
    return this.http.post<Order>(updateURI, order);
  }
}
