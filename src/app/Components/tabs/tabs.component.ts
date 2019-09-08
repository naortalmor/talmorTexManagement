import {Component, EventEmitter, Input, Output, OnChanges, SimpleChanges} from '@angular/core';
import { TabsInfo } from '../../Interfaces/tabs-info';
import { Statuses } from '../../Interfaces/Statuses';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent implements OnChanges {
  @Input() selectedTab;
  @Input() orders;
  @Output() selectedTabChanged = new EventEmitter<String>();
  @Output() newOrderEmitter = new EventEmitter<void>();
  tabsInfo: TabsInfo = {};
  statuses = Statuses;

  ngOnChanges(changes:SimpleChanges) {
    if(changes.orders && this.orders) {
      this.tabsInfo['all'] = this.orders.length;
      this.tabsInfo['new'] = this.orders.filter(curr => curr.status === Statuses.New).length;
      this.tabsInfo['done'] = this.orders.filter(curr => curr.status === Statuses.Done).length;
      this.tabsInfo['inProgress'] = this.tabsInfo['all'] - (this.tabsInfo['new'] + this.tabsInfo['done']);
    }
  }

  onTabSelected(tab: String) {
    this.selectedTabChanged.emit(tab);
  }

  onNewOrder() {
    this.newOrderEmitter.emit();
  }
}
