import { VoteComponent } from './vote.component'; 
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
    VoteComponent,
 
  
],
exports: [VoteComponent]
})
export class VoteModule { }
