import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  @Input() selectedTab;
  @Input() tabsInfo;
  @Output() selectedTabChanged = new EventEmitter<String>();

  onTabSelected(tab: String) {
    this.selectedTabChanged.emit(tab);
  }
}
