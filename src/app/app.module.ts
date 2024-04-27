import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/'; 
import { AngularFireModule } from '@angular/fire/compat';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // provideFirebaseApp(() => initializeApp({"projectId":"angularudemy-864eb","appId":"1:837682198869:web:56d8dfa48108e0bf9517dc","databaseURL":"https://angularudemy-864eb-default-rtdb.firebaseio.com","storageBucket":"angularudemy-864eb.appspot.com","apiKey":"AIzaSyBa8WbKJ_AyScM41HXa4YxcjtfRDzSErCI","authDomain":"angularudemy-864eb.firebaseapp.com","messagingSenderId":"837682198869","measurementId":"G-MNYSR3K7NK"})),
    // provideAuth(() => getAuth()),
    // provideAnalytics(() => getAnalytics()),
    // provideFirestore(() => getFirestore()),
    // provideDatabase(() => getDatabase()),
    // provideFunctions(() => getFunctions()),
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



