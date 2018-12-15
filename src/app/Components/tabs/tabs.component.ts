import {Component} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component..html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {
  selectedTab: String;

  onTabSelected(tab: String) {
    this.selectedTab = tab;
  }
}
