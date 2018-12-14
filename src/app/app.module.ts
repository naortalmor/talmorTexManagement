import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OredersService } from './Services/Orders/oreders.service';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { NewOrderComponent } from './Components/new-order/new-order.component';
import { OrderComponent } from './Components/order/order.component';
import {MaterialModule} from './material.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {OrderDetailsComponent} from './Components/order-details/order-details.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    StatisticsComponent,
    NavigationComponent,
    NewOrderComponent,
    OrderComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [OredersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
