import { Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnInit } from '@angular/core';

@Directive({
  selector: '[appUnlessDirective]'
})
export class UnlessDirectiveDirective implements OnInit{
@Input() appUnlessDirective: boolean;
  constructor( public templateRef: TemplateRef<any>, public vref: ViewContainerRef) { }
  
ngOnInit(){
if(!this.appUnlessDirective){
  this.vref.createEmbeddedView(this.templateRef);
} else {
  this.vref.clear()
}
}


}