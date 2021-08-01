import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersFirebaseService {

  private collection: string = "users";

  constructor(
    private db: AngularFirestore
  ) { }

  store(data){
    return this.db.collection(this.collection).add(data);
  }

  find(uid){
    return this.db.doc(`${this.collection}/${uid}`)
  }

}
