import { GoogleMaps } from '@ionic-native/google-maps';

import { RSignsPage } from './../pages/r-signs/r-signs';
import { InfoPage } from './../pages/info/info';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ContactPage } from '../pages/contact/contact';
import { EmergencyPage } from '../pages/emergency/emergency';
import { FworkPage } from '../pages/fwork/fwork';
import { MapPage } from '../pages/map/map';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    InfoPage,
    ContactPage,
    EmergencyPage,
    FworkPage,
    MapPage,
    RSignsPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    InfoPage,
    ContactPage,
    EmergencyPage,
    FworkPage,
    MapPage,
    RSignsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    
    
    { provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
