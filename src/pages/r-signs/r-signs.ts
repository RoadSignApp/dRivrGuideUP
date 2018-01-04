import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the RSignsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-r-signs',
  templateUrl: 'r-signs.html',
})
export class RSignsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RSignsPage');
  }
  click() {
    let alert = this.alertCtrl.create({
      title: 'STOP SIGNS',
      subTitle: 'No other sign is of an octagon shape, and no other sign is red in color. This is done because of the importance a stop sign has on traffic safety. Stop signs alert drivers to intersections and other areas where traffic may be traveling in opposite or crossing directions.For more information specifically about stop signs, visit our stop signs buyer’s guide.',
      buttons: ['OK']
    });
    alert.present();
  }

  click1() {
    let alert = this.alertCtrl.create({
      title: 'STOP SIGNS',
      subTitle: 'Orange is used on this sign because it is one of the most visible colors to the human eye, and can be noticed above other traffic signs on the road. When driving through work zones, safe driving is at its highest premium.Men at work signs are generally accompanied by other temporary warning signs, such as “road work ahead” signs and “detour” signs.',
      buttons: ['OK']
    });
    alert.present();
  }

  click2() {
    let alert = this.alertCtrl.create({
      title: 'DEER CROSSING SIGN',
      subTitle: 'As defined by the Manual on Uniform Traffic Control Devices (MUTCD) by the Federal Highway Administration, the MUTCD W11-3 deer crossing sign alerts drivers to areas where the population of deer is active and may enter the roadway. An average white-tailed deer, which is common throughout North America, weighs around 100 pounds and is about three or four feet tall. Seeing a deer of this size on the road is a very serious situation, and as a warning, deer crossing signs can help drivers pass safely through these areas',
      buttons: ['OK']
    });
    alert.present();
  }

  click3() {
    let alert = this.alertCtrl.create({
      title: 'PEDESTRIAN CROSSING SIGN',
      subTitle: 'MUTCD W11-2 is used in a majority of settings, and is pictured here. MUTCD S1-1 is a pedestrian school area sign, and is posted in school zones. Both signs use a yellow-green fluorescent reflective sheeting that enhances its visibility on the roads.',
      buttons: ['OK']
    });
    alert.present();
  }

  click4() {
    let alert = this.alertCtrl.create({
      title: 'EMERGENCY VEHICLE WARNING SIGN',
      subTitle: 'Similar to the deer crossing signs in shape and design, MUTCD W11-8 signs alert drivers to upcoming fire departments, ambulance stations, and other areas where emergency vehicles could be entering the roadway with limited warning to drivers. Drivers should also refrain from pulling over in these areas to keep it clear for emergency vehicles to pull in and out of the station.',
      buttons: ['OK']
    });
    alert.present();
  }


}
