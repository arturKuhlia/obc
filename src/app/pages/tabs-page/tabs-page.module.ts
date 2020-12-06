import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NgMaterialModule } from './../ng-material/ng-material.module';
import { CommentsComponent } from './../comments/comments.component';
import { ExcerptPipe } from './../../customPipes/excerpt.pipe';
import { SlugPipe } from './../../customPipes/slug.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginatorComponent } from './../paginator/paginator.component';
  import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
   import { environment } from '../../../environments/environment';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
 import { HttpClientModule } from '@angular/common/http'; 
  
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
    NgxPaginationModule,
    HttpClientModule, 
    MatExpansionModule,
    Ng2SearchPipeModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
   
    CKEditorModule,
    FormsModule,
    NgMaterialModule,
    MatSnackBarModule

  ],
  declarations: [
    ExcerptPipe,
    SlugPipe,
    TabsPage,
    BlogCardComponent,
    BlogEditorComponent,
    BlogComponent,
    PaginatorComponent,
    CommentsComponent,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireModule,
   
     ]
})
export class TabsModule { }
