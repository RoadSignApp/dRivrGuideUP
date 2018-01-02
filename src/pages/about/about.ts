import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { ContactPage } from '../contact/contact';
import { EmergencyPage } from '../emergency/emergency';
import { FworkPage } from '../fwork/fwork';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) { }

  infoPage(){
    this.navCtrl.push(InfoPage);
  }
  contactPage(){
    this.navCtrl.push(ContactPage);
  }

  emergencyPage(){
    this.navCtrl.push(EmergencyPage);
  }

  fworkPage(){
    this.navCtrl.push(FworkPage);
  }


}
