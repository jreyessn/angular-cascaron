import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = true;

  constructor() { }

  logout(){
    this.isAuth = false;
  }

  signIn(){
    this.isAuth = true;
  }

}
