import { BlogComponent } from './../../../../../site/src/app/components/blog/blog.component';
import { BlogEditorComponent } from './../../../../../site/src/app/components/blog-editor/blog-editor.component';
import { BlogCardComponent } from './../../../../../site/src/app/components/blog-card/blog-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
 
import { ScheduleModule } from '../schedule/schedule.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { DocModule } from '../doc/doc.module';
 
@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
 
    ScheduleModule,
    SessionDetailModule,
    DocModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    BlogCardComponent,
    BlogEditorComponent,
    BlogComponent

  ]
})
export class TabsModule { }
