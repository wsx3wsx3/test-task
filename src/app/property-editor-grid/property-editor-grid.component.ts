import { Component, OnInit, Input, } from '@angular/core';
import { Property } from './../core/models';



@Component({
  selector: 'app-property-editor-grid',
  templateUrl: './property-editor-grid.component.html',
  styleUrls: ['./property-editor-grid.component.css']
})
export class PropertyEditorGridComponent implements OnInit {
  @Input() properties: Property[];

  constructor() { }

  ngOnInit() {

  }

  trackById(index, item) {
    return item.id;
  }
}
