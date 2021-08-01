import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Subject } from 'rxjs';
import { AuthFirebaseService } from '../firebase/services/auth-firebase.service';
import { UsersFirebaseService } from '../firebase/services/users-firebase.service';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = true;

  public user$: Subject<IUser> = new Subject();

  constructor(
    private authFirebase: AuthFirebaseService,
    private usersFirebase: UsersFirebaseService
  ) { 

    this.user$.subscribe(value => console.log(value))
  }

  logout(){
    this.isAuth = false;
  }

  signIn(){
    this.isAuth = true;
  }

  signUp(data: IUser): Promise<any>{
    return this.usersFirebase.store(data)
  }

  setSession(user: IUser){
    console.log(user)
    const userRef: AngularFirestoreDocument<any> = this.usersFirebase.find(user.uid)
    
    userRef.set(user, { merge: true })

    this.user$.next(user);

    return userRef; 
  }

  /**
   * Auth con google
   */
  withGoogle(){
    return this.authFirebase.withGoogle()
        .then((response) => {
          
          this.setSession(response.user)

        })
        .catch(err => {
          console.log("error", err)
        })
  }

}
