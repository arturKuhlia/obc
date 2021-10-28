import { IonicModule } from '@ionic/angular'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';   
import { SlugPipe } from './slug.pipe';


@NgModule({
  declarations: [
    SlugPipe,
   
    
  ],
  imports: [
 
    RouterModule,
    CommonModule,
    IonicModule,
    FormsModule
  ],
  
exports: [SlugPipe]
})
export class SlugModule { }
