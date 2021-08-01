import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: AngularFirestore) { }

  test(){
    return this.db.collection('users')
    .valueChanges()
    // .snapshotChanges().pipe(
    //   map(
    //     (snaps) => snaps.map((snap) => snap.payload.doc.data())
    //   )
    // )
  }

}
