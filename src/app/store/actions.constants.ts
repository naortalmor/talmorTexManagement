import { Order } from './../Interfaces/order';
import {createAction, props} from '@ngrx/store'

export const initOrders = createAction(
  'init orders',
  props<{orders: Order[]}>()
  );

  export const getOrders = createAction(
    'get orders'
  )

  export const addOrder = createAction(
    'add order',
    props<{order:Order}>()
  )

  export const removeOrder = createAction(
    'remove order',
    props<{orderId:number}>()
  )

  export const updateOrder = createAction(
    'update order',
    props<{order: Order}>()
  )
