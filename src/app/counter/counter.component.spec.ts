import { FormBuilder } from '@angular/forms';
import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;

  beforeEach(() => {
    component = new CounterComponent( new FormBuilder);
  });

  it('should be increment method', () => {
    const result = component.increment();
    expect(component.counter).toBe(1);
  });
  it('should be decrement method', () => {
    const result = component.decrement();
    expect(component.counter).toBe(-1);
  });
  it('should be emit increment to parent component', () => {
    let result = null;
    component.counterEmitter.subscribe((r) => (result = r));
    component.increment();
    expect(result!).toBe(1);
  });

  it('should be create 2 control in form', () => {
    expect(component.form.contains('login')).toBeTruthy()
    expect(component.form.contains('email')).toBeTruthy()
  })
  it('should be login with validator', () => {
    const control =component.form.get('login')
    control?.setValue('')
    expect(control?.valid).toBeFalsy()
  })

});
