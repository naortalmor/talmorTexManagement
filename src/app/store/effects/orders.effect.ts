import { initOrders } from './../actions.constants';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { OredersService } from '../../Services/Orders/oreders.service';



@Injectable()
export class OrdersEffects {
  allOrders$ = createEffect(() =>
    this.actions.pipe(
      ofType('get orders'),
      mergeMap(() =>
        this.ordersService.getOrders().pipe(
          map(orders => (initOrders({orders}))),
          catchError(() => EMPTY)
        )
      )
    )
  )

  constructor(private ordersService:OredersService,
              private actions:Actions){
  }
}
