import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector:  '[appRef]'
})
export class RefDirective {
  // [x: string]: any;
  constructor(public container: ViewContainerRef) {

  }
}
