import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OrdersComponent} from '../Components/orders/orders.component';
import {StatisticsComponent} from '../Components/statistics/statistics.component';
import {NewOrderComponent} from '../Components/new-order/new-order.component';

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
