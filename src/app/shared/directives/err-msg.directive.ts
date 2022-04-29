import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrMsgDirective implements OnInit, OnChanges{

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'Este campo es necesario';

  constructor( private el: ElementRef<HTMLElement>) {

    this.htmlElement = el;

   }
  ngOnChanges(changes: SimpleChanges): void {

    if( changes['mensaje'] ) {
      const mensaje = changes['mensaje'].currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }

    if( changes['color'] ) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = this.color;
    } 

    console.log(changes);
  }
  ngOnInit(): void {
    console.log('NgOnInit directiva');
    this.setColor();
    this.setMensaje();
  }

  setColor():void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  
  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
