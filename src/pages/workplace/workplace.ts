import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

/**
 * Generated class for the WorkplacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-workplace',
  templateUrl: 'workplace.html',
})
export class WorkplacePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkplacePage');
  }

}
