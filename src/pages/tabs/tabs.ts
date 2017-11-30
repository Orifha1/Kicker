import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {WorkplacePage} from '../workplace/workplace';
import {TunesPage} from '../tunes/tunes';
import {ProfilePage} from '../profile/profile';
/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {

  tab1Root: WorkplacePage;
  tab2Root: TunesPage;
  tab3Root: ProfilePage;
  
  constructor() {
  }

}