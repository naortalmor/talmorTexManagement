import { SwalService } from './Services/sweet-alert/swal-service.service';
import { OrdersToView } from './pipes/orders-to-view.pipe';
import { OrdersEffects } from './store/effects/orders.effect';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OredersService } from './Services/Orders/oreders.service';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { NewOrderComponent } from './Components/new-order/new-order.component';
import { OrderComponent } from './Components/order/order.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OrderDetailsComponent} from './Components/order-details/order-details.component';
import {TabsComponent} from './Components/tabs/tabs.component';
import {EditOrderComponent} from './Components/edit-order/edit-order.component';

import {StoreModule} from '@ngrx/store';
import { ordersReducer } from './store/reducers/orders.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    StatisticsComponent,
    NavigationComponent,
    NewOrderComponent,
    OrderComponent,
    OrderDetailsComponent,
    TabsComponent,
    EditOrderComponent,
    OrdersToView
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    EffectsModule.forRoot([OrdersEffects]),
    StoreModule.forRoot({ orders: ordersReducer})
  ],
  providers: [OredersService, SwalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
