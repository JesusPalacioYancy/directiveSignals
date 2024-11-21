import { Component } from '@angular/core';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent {

  onFildUpdated(field: string, value: string){
    console.log({field, value})
  };

};
