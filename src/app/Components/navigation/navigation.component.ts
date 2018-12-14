import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() selectedView;
  @Output() viewEventEmitter = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  onViewItem(view: String) {
    this.viewEventEmitter.emit(view);
  }
}
