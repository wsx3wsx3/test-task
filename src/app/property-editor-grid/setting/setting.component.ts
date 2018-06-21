import {
  Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges,
  ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentFactory, ComponentRef
} from '@angular/core';
import { PropertySetting } from '../../core';
import { InputComponent } from '../dynamic/input/input.component';
import { CheckboxComponent } from '../dynamic/checkbox/checkbox.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit, OnChanges, OnDestroy {

  @Input() setting: PropertySetting;
  @ViewChild("dynContainer", { read: ViewContainerRef }) container;

  componentRef: ComponentRef<Component>;

  constructor(private resolver: ComponentFactoryResolver) { }

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

    const factory: ComponentFactory<Component> = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);
    const instance = (<InputComponent>this.componentRef.instance);

    instance.value = this.setting.value;
    // TODO -> send setting and value with service using Subject and update main properties
    instance.outputValue.subscribe(val => console.log(val));
  }

  ngOnDestroy() {
    this.componentRef.destroy();
  }

}
