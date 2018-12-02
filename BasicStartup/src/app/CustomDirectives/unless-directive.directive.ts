import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appUnlessDirective]'
})
export class UnlessDirectiveDirective {
  @Input() set appUnlessDirective(condition: boolean) {
    if (!condition) {
      this.vref.createEmbeddedView(this.templateRef);
    } else {
      this.vref.clear();
    }
  }

  constructor (public templateRef: TemplateRef<any>, public vref: ViewContainerRef) { }

}
