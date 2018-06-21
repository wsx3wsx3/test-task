import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  }   from '@angular/forms';

import { PropertyEditorGridComponent } from './property-editor-grid/property-editor-grid.component';
import { PropertyListItemComponent } from './property-list-item/property-list-item.component';
import { SettingComponent } from './setting/setting.component';
import { CheckboxComponent } from './dynamic/checkbox/checkbox.component';
import { InputComponent } from './dynamic/input/input.component';




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  entryComponents: [InputComponent, CheckboxComponent],
  declarations: [PropertyEditorGridComponent, PropertyListItemComponent, SettingComponent, CheckboxComponent, InputComponent],
  exports: [PropertyEditorGridComponent]
})
export class PropertyEditorGridModule { }
