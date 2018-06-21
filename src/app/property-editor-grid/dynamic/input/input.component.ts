import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
// fixme
export class InputComponent implements OnInit {
  @Input() set value(value: string) {
    this.inputControl.setValue(value);
  };

  outputValue: Subject<string> = new Subject();

  inputControl = new FormControl();

  private vsub: Subscription;

  constructor() {

  };

  ngOnInit() {
    this.vsub = this.inputControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.outputValue.next(value);
    });
  };

  ngOnDestroy() {
    if (this.vsub) this.vsub.unsubscribe();
  };

}
