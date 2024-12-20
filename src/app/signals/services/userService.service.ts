import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, SignalUserResponse } from '../interfaces/user-request.interface';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private http = inject( HttpClient );
  private baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this.http.get<SignalUserResponse>(`${this.baseUrl}/${id}`)
      .pipe(
        map( resp => resp.data),
      )
  };

};
