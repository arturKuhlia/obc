import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



export interface Bookmark {
  userId: any;
  itemId: any; 
  type: any;
}


@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
 


  constructor(private afs: AngularFirestore) { }
 
  getBookmarks(userId) {
  
    const bookmarksRef = this.afs.collection('bookmarks', ref => ref.where('userId', '==', userId) );
    return bookmarksRef.valueChanges();
  }

  
 
  getBookmark(userId,itemId){
  
     const bookmarksRef = this.afs.collection('bookmarks').doc(`${userId}_${itemId}`)
     console.log(bookmarksRef.valueChanges(), "service")
  return bookmarksRef.valueChanges();
 
  }

  

   deleteBookmark(userId, itemId,){

    const bookmarkPath = `${userId}_${itemId}`;
    
    return this.afs.collection('bookmarks').doc(bookmarkPath).delete()
 


   }
  setBookmark(userId, itemId, type) {
    
    // Custom doc ID for relationship
    console.log("service onclick function")
    const bookmarkPath = `bookmarks/${userId}_${itemId}`;
    
          let bookmark: Bookmark = { userId, itemId, type };
          
          return this.afs.doc(bookmarkPath).set(bookmark)
       
             
    
  }

}
