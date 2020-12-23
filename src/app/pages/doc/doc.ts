import { Component, OnInit } from '@angular/core';
import {TextData}  from '../../../assets/data/html';
import { AccordionData } from '../../../assets/data/accordion';
 
@Component({
  selector: 'page-doc',
  templateUrl: 'doc.html',
  styleUrls: ['./doc.scss'],
})
export class DocPage implements OnInit {
  
  term: string;


  SecTree:any= AccordionData;
  Sections: any = TextData; 
  constructor() { }
  

 

 
  ngOnInit() {}

  updateSchedule() {
    // Close any open sliding items when the schedule updates
    return(console.log("wow"))
  }

}
