import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective {
  @Input()
  color!: string;
  fontSize!: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')
  highlightMe() {
    console.log("Mouse moved in");

    this.elementRef.nativeElement.style.backgroundColor = this.color;
    //color = 'yellow';
  }

  @HostListener('mouseleave')
  undoHighlight() {
    console.log("Mouse moved out");
    this.elementRef.nativeElement.style.backgroundColor = '';
  }

  @HostListener('click')
  clickMe() {
    console.log("Clicked");
    this.elementRef.nativeElement.style.backgroundColor = this.color;
    //color = 'yellow';
  }

  @HostListener('dblclick')
  doubleClickMe() {
    console.log("Double Clicked");
    this.elementRef.nativeElement.style.backgroundColor = 'blue';
    //color = 'yellow';
  }

}
