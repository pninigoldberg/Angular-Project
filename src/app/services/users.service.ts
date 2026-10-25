import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    { username: 'teacher1', password: '123', role: 'teacher' },
    { username: 'secretary1', password: '123', role: 'secretary' }
  ];

}