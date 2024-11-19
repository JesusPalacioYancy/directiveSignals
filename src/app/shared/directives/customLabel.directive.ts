import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective { 

  private htmlElement?: ElementRef<HTMLElement>;
  private _color!: string;
  private _errors!: ValidationErrors | null | undefined;


  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  };

  @Input() set errors(value: ValidationErrors | null | undefined) {
    this._errors = value;
    this.setErrorMenssage();
  };

  constructor( el: ElementRef<HTMLElement> ) {
    this.htmlElement = el;
  };

  setStyle(): void {
    if( !this.htmlElement ) return;

    this.htmlElement!.nativeElement.style.color = this._color;
  };

  setErrorMenssage(): void {
    if( !this.htmlElement ) return;
    if ( !this._errors ) {
      this.htmlElement.nativeElement.innerText = '';
      return;
    }; 

    const errors = Object.keys(this._errors);

    if ( errors.includes('required') ) {
      this.htmlElement.nativeElement.innerText = 'Este campo es requerido';
      return;
    };

    if ( errors.includes('minlength') ) {
      const min = this._errors!['minlength']['requiredLength'];
      const current = this._errors!['minlength']['actualLength'];

      this.htmlElement.nativeElement.innerText = `Minimo ${current}/${min} caracteres`;
      return;
    };

    if ( errors.includes('email') ) {
      this.htmlElement.nativeElement.innerText = 'No tiene formato de correo';
      return;
    };

  };


};
