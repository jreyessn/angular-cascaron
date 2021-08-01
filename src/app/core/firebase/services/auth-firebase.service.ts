import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

  withGoogle() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }  

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
  }
  
}
