import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {


  constructor( private _elementRef: ElementRef,
    private renderer2:Renderer2) {
    //console.log(this._elementRef);
  this._elementRef.nativeElement.style.backgroundColor = 'yellow';
 /*this.renderer2.setElementStyle(
   this._elementRef.nativeElement,
   'background-Color',
   'yellow')*/
   }

}
