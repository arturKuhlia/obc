import { IonicModule } from '@ionic/angular';
import { FavoritesComponent } from './favorites.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FavoritesComponent,
    
  ],
  imports: [
    RouterModule,
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class FavoritesModule { }
