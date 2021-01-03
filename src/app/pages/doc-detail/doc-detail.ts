import { PopComponent } from './../pop/pop.component';
import { PopoverController } from '@ionic/angular';
 
import { Component,ViewEncapsulation, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {TextData}  from '../../../assets/data/html';
 
import {Location} from '@angular/common';


@Component({
  selector: 'page-doc-detail',
  styleUrls: ['./doc-detail.scss'],
  templateUrl: 'doc-detail.html',
  encapsulation: ViewEncapsulation.None
})
export class DocDetailPage  implements OnInit  {
  doc: any;
  isFavorite = false;
  defaultHref = '';
  Sections: any = TextData;
  SectionId:any;
 CommentSectionId:any;
  


  constructor(private _location: Location,
    private route: ActivatedRoute,
    public popoverController: PopoverController ) {
     
  }


 ngOnInit(){
  this.SectionId = this.route.snapshot.paramMap.get('id');
  console.log(this.SectionId)
  this.doc = this.getSectionById(this.SectionId)
  console.log(typeof(this.doc))
  this.CommentSectionId = this.SectionId.replace(/\s/g, '');
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
 

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/doc`;
  }
   
  
  backClicked() {
    this._location.back();
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
