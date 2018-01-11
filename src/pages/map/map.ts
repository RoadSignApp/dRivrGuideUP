import { GoogleMaps } from '@ionic-native/google-maps';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


declare var google: any;




/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */




@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapRef: ElementRef;


  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.showMap();

  }
  showMap() {
    // Location lat long 
    const location = new google.maps.LatLng(51.507351, -0.127758);

    //Map options
    const options = {
      center: location,
      zoom: 20
    };


    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);

  }

  addMarker(position, map) {
    return new google.maps.Marker({
      position,
      map
    });


  }

}
