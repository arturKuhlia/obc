import { CommentsModule } from './../comments/comments.module';
import { PopComponent } from './../pop/pop.component';
 
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
    DocDetailPageRoutingModule,
    CommentsModule
  ],
  declarations: [
    DocDetailPage,
    BookmarkComponent,
   PopComponent
   
  ],
  entryComponents: [PopComponent],
})
export class DocDetailModule { }
