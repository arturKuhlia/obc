import { Bookmark, BookmarkService } from './../../services/bookmark.service';
import { async } from "@angular/core/testing";
import { SnackbarService } from "./../../services/snackbar.service";
 import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { map, takeUntil } from "rxjs/operators";
import { Observable, Subject } from "rxjs"; 
import { AppUser } from '../../models/appuser';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
 
  @Input() itemId;
  @Input() type;
  appUser: AppUser; 
  isMarked :any
  one$;
  two$;
     
  constructor(
    private authService: AuthService,
    private bookmarkSerice: BookmarkService,
     
  ) {}

  ngOnInit() {
    
    this.one$ =this.authService.appUser$.subscribe(appUser => { 
     this.appUser=appUser
       
      this.two$=this.bookmarkSerice.getBookmark(appUser.email, this.itemId).subscribe(res => {  
        this.isMarked = res;
      console.log("result!!!!!!!!!!!!!!!!!!!!!",this.isMarked)
      });
    console.log(this.isMarked)
    
    
    
    
    });
      
  }

  myFunction(){
    console.log("test");
}
bookmarkThis(){
  console.log("component onclick function")
  
if (  this.isMarked !== undefined){
  this.bookmarkSerice.deleteBookmark(this.appUser.email, this.itemId)
}else{
  this.bookmarkSerice.setBookmark(this.appUser.email, this.itemId, this.type)
  }

  

}

  ngOnDestroy() {
    this.one$.unsubscribe();
    this.two$.unsubscribe();
  }
  

}
