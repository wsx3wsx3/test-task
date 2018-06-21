import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit, OnDestroy {
  @Input() set value(value: string) {
    this.inputControl.setValue(value);
  };
  outputValue: Subject<string> = new Subject();

  inputControl = new FormControl();
  
  private vsub: Subscription;

  constructor() { }

  ngOnInit() {
    this.vsub = this.inputControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.outputValue.next(value);
    });
  }

  ngOnDestroy() {
    if (this.vsub) this.vsub.unsubscribe();
  }
}
