import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './productPage.component.html',
  styleUrl: './productPage.component.css',
})
export class ProductPageComponent { 
  // constructor(fb: FormBuilder) {}

  // Otra forma de injecion de dependecia
  private fb = inject( FormBuilder );

  public color: string = 'red';


  public myFrom: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(6), Validators.email]],
  });

  changeColor(): void {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  };


};
