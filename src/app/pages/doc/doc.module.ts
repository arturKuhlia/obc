import { DocCategoryComponent } from './../doc-category/doc-category.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DocPage } from './doc';
import { DocFilterPage } from '../doc-filter/doc-filter';
import { DocPageRoutingModule } from './doc-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocPageRoutingModule,
    MatExpansionModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    DocPage,
    DocFilterPage,
    DocCategoryComponent
  ],
  entryComponents: [
    DocFilterPage
  ]
})
export class DocModule { }
