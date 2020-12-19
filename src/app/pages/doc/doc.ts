import { Component, OnInit } from '@angular/core';
import {TextData}  from '../../../assets/data/html';
import { AccordionData } from '../../../assets/data/accordion';
 
@Component({
  selector: 'page-doc',
  templateUrl: 'doc.html',
  styleUrls: ['./doc.scss'],
})
export class DocPage implements OnInit {
  display = false;
 onPress() {
   this.display = true;
   
 }

 


  SecTree:any= AccordionData;
  
  constructor() { }
  

 

 
  ngOnInit() {}

  updateSchedule() {
    // Close any open sliding items when the schedule updates
    return(console.log("wow"))
  }

}
