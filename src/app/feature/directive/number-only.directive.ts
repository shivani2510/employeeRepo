import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberOnly]'
})
export class NumberOnlyDirective {

  constructor() { }


  @HostListener('keypress', ['$event'])
  keypress(event) {
    var charCode = (event.which) ? event.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
  }
}
