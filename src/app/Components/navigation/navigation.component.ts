import { Views } from '../../enums/views.enums';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @Input() selectedView;
  @Output() viewEventEmitter = new EventEmitter<String>();
  views = Views;

  onViewItem(view: string) {
    this.viewEventEmitter.emit(view);
  }
}
