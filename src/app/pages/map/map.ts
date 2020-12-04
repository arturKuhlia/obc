import { Component, OnInit } from '@angular/core';
import {TextData}  from '../../../assets/data/html';
import { AccordionData } from '../../../assets/data/accordion';
 
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage implements OnInit {
  
 


  SecTree:any= AccordionData;
  Sections: any = TextData; 
  constructor() { }
  


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
 

 
  ngOnInit() {}



  toggleAccordian(event, index,data) {
    var element = event.target;
    element.classList.toggle("active");
    if(data[index].isActive) {
      data[index].isActive = false;
    } else {
      data[index].isActive = true;
    }      
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
}
