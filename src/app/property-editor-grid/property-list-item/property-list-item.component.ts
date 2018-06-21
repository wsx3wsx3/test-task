import { Component, OnInit, Input } from '@angular/core';
import { Property } from '../../core';

@Component({
  selector: 'app-property-list-item',
  templateUrl: './property-list-item.component.html',
  styleUrls: ['./property-list-item.component.css']
})
export class PropertyListItemComponent implements OnInit {
  @Input() property: Property;
  isSettingsOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSettingsOpen() {
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  trackById(index, item) {
    return item.id;
  }
  // fixme to icons
  getArrow(): string {
    return this.isSettingsOpen ? '▼': '▶';
  }
}
