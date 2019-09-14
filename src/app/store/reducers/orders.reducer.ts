import { addOrder, removeOrder, updateOrder } from './../actions.constants';
import {createReducer, on, props} from '@ngrx/store';
import { initOrders } from '../actions.constants';
import { Order } from '../../Interfaces/order';

export const initialState = [];

export const ordersReducer = createReducer(
  initialState,
  on(initOrders, (state, {orders}) => (orders)),
  on(addOrder, (state, {order}) => [...state, order]),
  on(removeOrder, (state, {orderId}) => state.filter((order:Order) => order._id !== orderId)),
  on(updateOrder, (state, {order}) => state.map((curr: Order) => curr._id === order._id ? order : curr))
);
