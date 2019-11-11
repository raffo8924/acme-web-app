import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[KapcomAutofocus]'
})
export class KapcomAutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}
