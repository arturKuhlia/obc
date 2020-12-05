import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocDetailPage } from './doc-detail';

const routes: Routes = [
  {
    path: '',
    component: DocDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocDetailPageRoutingModule { }
