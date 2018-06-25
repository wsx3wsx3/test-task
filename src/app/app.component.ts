import { Component, OnInit } from '@angular/core';
import { Property } from './core';
import { PropertyEditorGridService } from './core/property-editor-grid.service';
import { of, Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  properties: Property[];
  isLoading: boolean;

  constructor(private peg_s: PropertyEditorGridService) {

  }
  
  ngOnInit() {
    // TODO -> emulate getting from server in service
    const obs = of([
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
    ]);
    this.isLoading = true;
    obs.pipe(
      delay(1500),
      finalize(() => {
        this.isLoading = false;
      })
    ).subscribe(res => this.properties = res);

    this.peg_s.changedSetting$.subscribe((e) => {
      const property = this.properties.find(pr => pr.id === e.groupId);
      if (!property) return;

      const idx = property.settings.findIndex(s => s.id === e.id);
      if (idx === -1) return;

      const newSetting = {...property.settings[idx], value: e.value};
      property.settings.splice(idx, 1, newSetting);
    });
    
  }

}
