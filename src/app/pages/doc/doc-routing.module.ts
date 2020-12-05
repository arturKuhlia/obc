import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocPage } from './doc';

const routes: Routes = [
  {
    path: '',
    component: DocPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocPageRoutingModule { }
