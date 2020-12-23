import { BookmarkComponent } from './../bookmark/bookmark.component';
 
import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { DocDetailPage } from './doc-detail';
import { DocDetailPageRoutingModule } from './doc-detail-routing.module';
import { IonicModule } from '@ionic/angular';
  
 
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DocDetailPageRoutingModule
  ],
  declarations: [
    DocDetailPage,
    BookmarkComponent
  ]
})
export class DocDetailModule { }
