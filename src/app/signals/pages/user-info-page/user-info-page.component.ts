import { Component, inject, OnInit, signal } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {

  private usersService = inject(UserServiceService);
  public userId = signal(1);

  public currendtUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser(this.userId());
  };

  loadUser( id: number ) {
    if( id <= 0 ) return;

    this.userId.set(id);
    this.currendtUser.set(undefined);

    this.usersService.getUserById(id)
      .subscribe( user => 
        this.currendtUser.set(user)
      );

  };

};
