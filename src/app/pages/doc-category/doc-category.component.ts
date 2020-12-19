import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doc-category',
  templateUrl: './doc-category.component.html',
  styleUrls: ['./doc-category.component.scss'], 
})
export class DocCategoryComponent implements OnInit {

  tabIndex:any;
  opened: any;

  constructor() { }
  @Input() childTree;

  onTabClick(index){
  if (this.tabIndex== index) {
    
    this.tabIndex = NaN;
  } else {
      
   
    this.tabIndex = index;
  }
  
    
}
  ngOnInit() {}

}
