import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightProperties]'
})
export class HighlightPropertiesDirective implements AfterViewInit {

  @Input("my-bgColor")
  highLightColor!: string;

  @Input("text-color")
  fontColor!: string;

  private myElement: any;
  buttonCheck: any;

  constructor(element: ElementRef) {
    this.myElement = element.nativeElement;
  }

  ngAfterViewInit(): void {
    this.myElement.nativeElement.style.backgroundColor = this.highLightColor;
    this.myElement.style.color = this.fontColor;
  }

  @HostListener('click')
  clickMe() {
    if (this.buttonCheck) {
      console.log("Clicked");
      this.buttonCheck = false;
      this.myElement.style.backgroundColor = this.highLightColor;
      this.myElement.style.color = this.fontColor;
    }
    else {
      console.log("Clicked");
      this.buttonCheck = true;
      this.myElement.style.backgroundColor = this.fontColor;
      this.myElement.style.color = this.highLightColor;
    }
  }
}
