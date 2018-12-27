import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {Order} from '../../Interfaces/order';
import {OredersService} from '../../Services/Orders/oreders.service';
import {Statuses} from '../../Interfaces/Statuses';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  @Input() orders;
  @Input() selectedTab;
  @Output() onTabChanged = new EventEmitter<string>();

  tabChanged(tab: string) {
    this.onTabChanged.emit(tab);
  }
}
