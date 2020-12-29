import { PopComponent } from './../pop/pop.component';
import { PopoverController } from '@ionic/angular';
 
import { Component } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {TextData}  from '../../../assets/data/html';
 
 

@Component({
  selector: 'page-doc-detail',
  styleUrls: ['./doc-detail.scss'],
  templateUrl: 'doc-detail.html'
})
export class DocDetailPage    {
  doc: any;
  isFavorite = false;
  defaultHref = '';
  Sections: any = TextData;
  SectionId:any;
 
  


  constructor(private route: ActivatedRoute,
    public popoverController: PopoverController ) {
     
  }

 

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopComponent,
      componentProps:{docId:this.SectionId},
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  ionViewWillEnter() {
     this.SectionId = this.route.snapshot.paramMap.get('id');
     console.log(this.SectionId)
     this.doc = this.getSectionById(this.SectionId)
     console.log(typeof(this.doc))
        
  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }
   
  

  getSectionById(searchVal:any) {
    let result
     let searchField = "id";
       for (var i=0 ; i < TextData.length ; i++)
     {
         if (TextData[i][searchField] == searchVal) {
             result= TextData[i].innerHTML;
             
         }
     } 
     return(result)
   }

   
  
 
}
