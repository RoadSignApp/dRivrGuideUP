//import { GoogleMaps } from '@ionic-native/google-maps';
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

  @ViewChild('map') mapElement;
  map: any;


  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad(){
    this.initMap();
  }
      initMap(){
        let latLng = new google.maps.LatLng(-34.9290, 138.6010);
        let mapOptions = {
           center: latLng,
           zoom: 15,
           mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


      }
  
}
