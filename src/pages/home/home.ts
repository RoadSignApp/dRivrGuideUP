import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
   showLongToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'I have always been attracted to cars, and driving is a completely measurable experience: if you qualify last on the grid, you are the slowest, and if you qualify first on the grid, you are the fastest. So no one can say you are slow if you are fast and no one can say you are fast if you are slow.',
     showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

   

}
