import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TunesPage } from './tunes';

@NgModule({
  declarations: [
    TunesPage,
  ],
  imports: [
    IonicPageModule.forChild(TunesPage),
  ],
  exports:[
    TunesPage,
  ]
})
export class TunesPageModule {}
