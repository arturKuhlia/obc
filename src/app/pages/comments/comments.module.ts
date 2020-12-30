import { CommentsComponent } from './comments.component';
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
    CommentsComponent,
  
],
exports: [CommentsComponent]
})
export class CommentsModule { }
