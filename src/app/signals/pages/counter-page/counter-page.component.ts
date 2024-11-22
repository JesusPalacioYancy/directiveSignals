import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css'
})

export class CounterPageComponent {

  public counter = signal(10);
  public squereCounter = computed( () => this.counter() * this.counter());

  increaseBy(value: number) {
    this.counter.update( curren => curren + value );
  };

};
