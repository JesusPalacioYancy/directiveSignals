import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css'
})
export class PropertiesPageComponent implements OnInit {

  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  public fullName = computed<string>( () => {
    return `${this.user().first_name} ${this.user().last_name} `
  });

  public counter = signal(10);

  public userChangeEfect = effect( () => {
    console.log(`${this.user().first_name} - ${this.counter()} `);
  });

  ngOnInit(): void {
    setInterval(() => {
      this.counter.update(current => current + 1)
    }, 1000)
  };

  onFildUpdated(field: keyof User, value: string){
    this.user.update( current => ({
      ...current,
      [field] : value
    }));
  };

};
