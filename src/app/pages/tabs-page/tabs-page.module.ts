import { BookmarkModule } from './../bookmark/bookmark.module';
import { VoteModule } from './../vote/vote.module';
import { CommentsModule } from './../comments/comments.module';
import { DocDetailModule } from './../doc-detail/doc-detail.module';
import { PopComponent } from './../pop/pop.component';
import { BookmarkComponent } from './../bookmark/bookmark.component';
import { BookmarkService } from './../../services/bookmark.service';
import { SearchComponent } from './../search/search.component';
 
import { VoteComponent } from './../vote/vote.component';
import { VoteService } from './../../services/vote.service';
 
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
    CommentsModule,
    VoteModule,
    BookmarkModule,
    ScheduleModule,
    SessionDetailModule,
    DocModule,
    DocDetailModule,
    TabsPageRoutingModule,
    VoteModule,
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
    MatSnackBarModule,
   
  ],
  declarations: [
    ExcerptPipe,
    SlugPipe,
    TabsPage,
    SearchComponent,
    BlogCardComponent,
    BlogEditorComponent,
    BlogComponent, 
    PaginatorComponent, 
    
   
  ], 
  providers: [
    
    StatusBar,
    SplashScreen,
    AngularFireModule,
   VoteService,
   BookmarkService
     ]
})
export class TabsModule { }
