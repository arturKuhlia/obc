  import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
   import { environment } from '../../../environments/environment';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
 import { HttpClientModule } from '@angular/common/http'; 
 import { ExcerptPipe } from './../../customPipes/excerpt.pipe';
import { SlugPipe } from './../../customPipes/slug.pipe'; 
import { MatExpansionModule } from '@angular/material/expansion';


import { Ng2SearchPipeModule } from 'ng2-search-filter';







import { BlogComponent } from './../blog/blog.component';
import { BlogEditorComponent } from './../blog-editor/blog-editor.component';
import { BlogCardComponent } from './../blog-card/blog-card.component';
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
    TabsPageRoutingModule,
 
    IonicModule.forRoot(),
 
    HttpClientModule, 
    MatExpansionModule,
    Ng2SearchPipeModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
 
    CKEditorModule,
    FormsModule,
  ],
  declarations: [
    TabsPage,
    BlogCardComponent,
    BlogEditorComponent,
    BlogComponent

  ],
  providers: [
    StatusBar,
    SplashScreen,
     ]
})
export class TabsModule { }
