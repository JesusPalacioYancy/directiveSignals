import { Component, computed, inject, OnInit, signal, effect } from '@angular/core';
import { UserService } from '../../services/userService.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

  private usersService = inject(UserService);
  public userId = signal(1);
  public currendtUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  public fullName = computed<string>( () => {
    if(!this.currendtUser()) return 'Usauario Inexistente';
    return `${this.currendtUser()!.first_name} ${this.currendtUser()!.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
    this.changeService
  };

  loadUser(id: number) {
    if( id <= 0 ) return;
    this.userId.set(id);
    this.currendtUser.set(undefined);
    this.getUserService(id)
  };

  getUserService(id : number){
    this.usersService.getUserById(id)
    .subscribe({
      next: (user) => {
        this.currendtUser.set(user);
        this.userWasFound.set(true);
      },
      error:() => {
        this.userWasFound.set(false);
        this.currendtUser.set(undefined);
      }
    });
  };

  
  public changeService = effect(() => { 
    const user = this.currendtUser();
    const status = this.userWasFound();
    console.log(user, status);
  });

};
