import { ChangedValueEvent } from './models/changed-value-event.model';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyEditorGridService {
  private changedSettingSource = new Subject<ChangedValueEvent>();

  changedSetting$ = this.changedSettingSource.asObservable();

  constructor() { }

  emitChangedSetting({id, groupId}, value: any) {
    const event = {
      id,
      groupId, 
      value
    }
    this.changedSettingSource.next(event);
  }
}
