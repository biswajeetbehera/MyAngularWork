import { Directive, 
  HostListener, 
  ElementRef, 
  Renderer2, 
  HostBinding, 
  Input,
  OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective  implements OnInit{
@Input('appHighlight') defaultColor: string;
@Input () highlightColor: string;
@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(public elementRef: ElementRef, public renderer: Renderer2) { }
// @HostListener('mouseover') onMouseOver(eventData: Event) {
//   this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor', 'blue');
// }
// @HostListener('mouseout') onMouseOut(eventData: Event) {
//   this.renderer.setStyle(this.elementRef.nativeElement,'backgroundColor', 'transparent');
// }
ngOnInit() {
  this.backgroundColor = this.defaultColor;
}

@HostListener('mouseover') onMouseOver(eventData: Event) {
  this.backgroundColor  = this.highlightColor;
}
@HostListener('mouseout') onMouseOut(eventData: Event) {
  this.backgroundColor = this.defaultColor;
}

}