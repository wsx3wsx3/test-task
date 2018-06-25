import {
  Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges,
  ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef, ChangeDetectionStrategy
} from '@angular/core';
import { PropertySetting } from '../../core/models';
import { InputComponent } from '../dynamic/input/input.component';
import { CheckboxComponent } from '../dynamic/checkbox/checkbox.component';
import { Subscription } from 'rxjs';
import { PropertyEditorGridService } from '../../core/property-editor-grid.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingComponent implements OnInit, OnChanges, OnDestroy {

  @Input() setting: PropertySetting;
  @ViewChild("dynContainer", { read: ViewContainerRef }) container;

  componentRef: ComponentRef<Component>;
  outputValueSub: Subscription;

  constructor(
    private resolver: ComponentFactoryResolver,
    private peg_s: PropertyEditorGridService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.setting) {
      this._processAddComponent(this.setting.type);
    }
  }

  _processAddComponent(type: string): void {
    switch (type) {
      case 'input':
        this._createComponent(InputComponent);
        break;
      case 'checkbox':
        this._createComponent(CheckboxComponent);
        break;
    }
  }

  _createComponent(component) {
    this.container.clear();

    if (this.outputValueSub) this.outputValueSub.unsubscribe();

    const factory: ComponentFactory<Component> = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);
    const instance = (<InputComponent>this.componentRef.instance);

    instance.value = this.setting.value;
    // TODO -> send setting and value with service using Subject and update main properties
    this.outputValueSub = instance.outputValue.subscribe(val => this.peg_s.emitChangedSetting(this.setting, val));
  }

  ngOnDestroy() {
    this.componentRef.destroy();
    this.outputValueSub.unsubscribe();
  }

}
