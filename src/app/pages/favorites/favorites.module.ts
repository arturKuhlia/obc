import { IonicModule } from '@ionic/angular';
import { FavoritesComponent } from './favorites.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FavoritesComponent,
    
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class FavoritesModule { }
