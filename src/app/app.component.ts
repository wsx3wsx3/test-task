import { Component, OnInit } from '@angular/core';
import { Property } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  properties: Property[];

  ngOnInit() {
    // TODO -> emulate getting from server in service
    this.properties = [
      {
        id: 1,
        name: 'Prop1',
        settings: [
          {
            id: 1,
            name: 'Setting 1.1',
            groupId: 1,
            type: 'input',
            value: 'dynamic test'
          },
          {
            id: 2,
            name: 'Setting 1.2',
            groupId: 1,
            type: 'checkbox',
            value: true
          }
        ]
      },
      {
        id: 2,
        name: 'Prop2',
        settings: [
          {
            id: 3,
            name: 'Setting 2.1',
            groupId: 2,
            type: 'input',
            value: 'dynamic test'
          },
          {
            id: 4,
            name: 'Setting 2.2',
            groupId: 2,
            type: 'input',
            value: 'dynamic test'
          }
        ]
      }
    ];
  }

}
