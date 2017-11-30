import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkplacePage } from './workplace';

@NgModule({
  declarations: [
    WorkplacePage,
  ],
  imports: [
    IonicPageModule.forChild(WorkplacePage),
  ],
 exports:[
    WorkplacePage,
  ]
})
export class WorkplacePageModule {}
