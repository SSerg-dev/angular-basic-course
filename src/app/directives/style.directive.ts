import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    el.nativeElement.style.color = 'blue';
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
  @HostListener('click', ['$event.target'])
  onClick(event: Event) {
    // console.log("🚀 ~ file: style.directive.ts:12 ~ StyleDirective ~ $event.target:", event)
  }

  @HostListener('mouseenter')
  onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseleave')
  onLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
  }
}
