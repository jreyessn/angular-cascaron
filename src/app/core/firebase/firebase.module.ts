import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  exports:[
    AngularFireModule,
    AngularFireDatabaseModule
  ],
  providers: [
    AngularFirestore
  ],
})
export class FirebaseModule { }
