import { Injectable } from '@angular/core';
import { User } from '../models/User';
// import { Observables } from 'rxjs/observable';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [

      {
        firstName: 'Jhon',
        lastName: 'Doe',
        email: 'jhon@gmail.com',
        isActive: true,
        registered: new Date('01/02/2020 08:30:00'),
        hide: true
      },

      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@yahoo.com',
        isActive: false,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },

      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karenWill@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
    ];
  }
  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next({ name: 'saga' });
      }, 4000);

    });
    return this.data;
  }
}
