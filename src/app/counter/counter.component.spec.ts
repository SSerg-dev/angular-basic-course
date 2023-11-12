import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;

  beforeEach(() => {
    component = new CounterComponent();
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
});
