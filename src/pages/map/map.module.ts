import { Geolocation } from '@ionic-native/geolocation';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';

@NgModule({
  declarations: [
    MapPage,
    Geolocation,
  ],
  imports: [
    
    IonicPageModule.forChild(MapPage),
  ],
})
export class MapPageModule {}