import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OredersService } from './Services/Orders/oreders.service';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { AppRoutingModule } from './Routes/app-routing.module';
import { NewOrderComponent } from './Components/new-order/new-order.component';
import { OrderComponent } from './Components/order/order.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    StatisticsComponent,
    NavigationComponent,
    NewOrderComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  providers: [OredersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
