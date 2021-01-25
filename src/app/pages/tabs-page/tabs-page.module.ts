import { FavoritesModule } from './../favorites/favorites.module';
import { BookmarkModule } from './../bookmark/bookmark.module';
import { VoteModule } from './../vote/vote.module';
import { CommentsModule } from './../comments/comments.module';
import { DocDetailModule } from './../doc-detail/doc-detail.module'; 
import { BookmarkService } from './../../services/bookmark.service';
import { SearchComponent } from './../search/search.component';
  
import { VoteService } from './../../services/vote.service';
 
import {  MatSnackBarModule } from '@angular/material/snack-bar';
import { NgMaterialModule } from './../ng-material/ng-material.module';
import { ExcerptPipe } from './../../customPipes/excerpt.pipe';
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
import { DocModule } from '../doc/doc.module';
import { SlugModule } from '../../customPipes/slug.module';
import { AccountComponent } from '../account/account.component';
 
@NgModule({
  imports: [ 
    SlugModule,
    FavoritesModule,
    AboutModule,
    CommonModule,
    IonicModule,
    CommentsModule,
    VoteModule,
    BookmarkModule,
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
    AccountComponent,
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
