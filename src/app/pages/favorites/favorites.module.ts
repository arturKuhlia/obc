import { IonicModule } from '@ionic/angular';
import { FavoritesComponent } from './favorites.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { VoteModule } from '../vote/vote.module';
import { SlugModule } from '../../customPipes/slug.module';
 

@NgModule({
  declarations: [
    FavoritesComponent,
   
    
  ],
  imports: [
SlugModule,
    VoteModule,
    RouterModule,
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class FavoritesModule { }
