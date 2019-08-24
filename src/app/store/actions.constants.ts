import { Order } from './../Interfaces/order';
import {createAction, props} from '@ngrx/store'

export const initOrders = createAction(
  'init orders',
  props<{orders: Order[]}>()
  );

  export const getOrders = createAction(
    'get orders'
  )
