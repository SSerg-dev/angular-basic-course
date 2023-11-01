import {
  Component,
  OnDestroy,
  OnInit,
  Provider,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SwitchComponent),
  multi: true,
};

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  providers: [VALUE_ACCESSOR],
})
export class SwitchComponent
  implements ControlValueAccessor, OnInit, OnDestroy
{
  state = 'off';

  constructor() {}

  // methods
  private onChange = (value: any) => {};

  writeValue(state: string): void {
    this.state = state;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}

  setState(state: string) {
    this.state = state;

    this.onChange(this.state);
  }

  ngOnDestroy(): void {}
  ngOnInit(): void {}
}
