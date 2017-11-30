import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

/**
 * Generated class for the TunesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-tunes',
  templateUrl: 'tunes.html',
})
export class TunesPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TunesPage');
  }

}
