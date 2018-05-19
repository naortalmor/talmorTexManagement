import {Order} from '../../Interfaces/order';
import {getDate} from 'ngx-bootstrap/chronos/utils/date-getters';

const today: Date = new Date(11/5/2018);

export const ORDERS: Order[] = [
  { id: 1, orderDate: today, customerName: 'Naor', cost: 1000, height: 1, supplyDate: today, width: 10},
  { id: 2, orderDate: today, customerName: 'Gal', cost: 1100, height: 2, supplyDate: today, width: 10},
  { id: 3, orderDate: today, customerName: 'Riki', cost: 1200, height: 3, supplyDate: today, width: 10},
  { id: 4, orderDate: today, customerName: 'Yovel', cost: 1300, height: 4, supplyDate: today, width: 10},
  { id: 5, orderDate: today, customerName: 'Or', cost: 1400, height: 5, supplyDate: today, width: 10}
];
