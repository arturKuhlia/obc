import { BookmarkComponent } from './bookmark.component';

import { FormsModule }   from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common'; 
import { IonicModule } from '@ionic/angular';
  
 
@NgModule({
  imports: [
    CommonModule,
    IonicModule, 
    FormsModule
  ],
  declarations: [ 
    BookmarkComponent
  
],
exports: [BookmarkComponent]
})
export class BookmarkModule { }
