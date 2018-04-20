import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from './orders/orders.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {NewOrderComponent} from './new-order/new-order.component';

const routes: Routes = [
  { path: 'orders', component: OrdersComponent},
  { path: 'statistics', component: StatisticsComponent},
  { path: 'newOrder', component: NewOrderComponent},
  { path: '' , redirectTo: '/orders', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
