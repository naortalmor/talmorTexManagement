import {createReducer, on, props} from '@ngrx/store';
import { initOrders } from '../actions.constants';
import { Order } from '../../Interfaces/order';

export const initialState = [];

export const ordersReducer = createReducer(
  initialState,
  on(initOrders, (state, {orders}) => (orders)),
);
