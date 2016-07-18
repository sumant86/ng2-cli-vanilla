import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {}
  getUser(){
    let user = JSON.parse(localStorage.getItem('login'));
    return user;
  }
  
  setUser(user){
    localStorage.setItem('login', JSON.stringify(user));
    return;
  }

  clear(){
    localStorage.removeItem('login');
  }
}
