import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[Higlight]'
})
export class HiglightDirective {
  @HostListener('mouseenter') onMouseOver(){
  
    this.backgroundColor = this.highlightColor;
   }
 
   @HostListener('mouseleave') onMouseLeave(){
    
     this.backgroundColor = this.defautlColor;
   }
 
   @HostBinding('style.backgroundColor')
   backgroundColor!: string;

   @Input () defautlColor: string = 'white';
   @Input () highlightColor: string = 'yellow';

  constructor() { }
  ngOnInit() {
    this.backgroundColor = this.defautlColor ;
  
  }

}
