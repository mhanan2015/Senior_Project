import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MainMenuPage } from '../pages/main-menu/main-menu';
import { PostPage } from '../pages/post/post';
import { ReviewPage } from '../pages/review/review';


import { AuthProvider } from '../providers/auth/auth';

// Importing AF2 Module

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';



// AF2 Settings
const firebaseConfig = {
  apiKey: "AIzaSyDJeBNKYFeTzJeaKn58D-tEpyI8IFbMjWo",
    authDomain: "fir-auth-8e348.firebaseapp.com",
    databaseURL: "https://fir-auth-8e348.firebaseio.com",
    projectId: "fir-auth-8e348",
    storageBucket: "fir-auth-8e348.appspot.com",
    messagingSenderId: "414493141996"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MainMenuPage,
    PostPage,
    ReviewPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    MainMenuPage,
    PostPage,
    ReviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthProvider,
    AngularFireAuth,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
