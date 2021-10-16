import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyAfl6h0oR2UfNqIbo8IPC9fKhtkApEriLY",
  authDomain: "puca-registro.firebaseapp.com",
  projectId: "puca-registro",
  storageBucket: "puca-registro.appspot.com",
  messagingSenderId: "1069460061753",
  appId: "1:1069460061753:web:6bfeb8973e3669e336d7e8"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
