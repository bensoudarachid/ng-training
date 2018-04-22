import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[httpSrc]'
})
export class HttpSrcDirective {
  @Input() httpSrc:string;

  constructor(private element:ElementRef) { 
    // element.nativeElement.src = 'assets/images/rocket.png';
    console.log('directive constr '+this.httpSrc)
  }
  
  @HostListener('load', ['$event'])
  onLoad() {
    console.log('directive onload')
    // this.element.nativeElement.src = this.httpSrc;
    // this.element.nativeElement.src = 'assets/images/rocket.png';
  }  
}
