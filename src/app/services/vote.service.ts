import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Star {
  userId: any;
  movieId: any;
  value: number;
}


@Injectable({
  providedIn: 'root'
})
export class VoteService {

 

  constructor(private afs: AngularFirestore) { }

  // Star reviews that belong to a user
  getUserStars(userId) {
  

    const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId) );
    return starsRef.valueChanges();
  }

  
 
  getUserStarOld(userId,movieId){
  
     const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId).where('movieId', '==', movieId) );
     console.log(starsRef, "service")
  return starsRef.valueChanges();

    
  }

  getUserStar(userId,movieId){
    const starPath = `${userId}_${movieId}`
    
    const starsRef = this.afs.collection('stars').doc(starPath).valueChanges() ;
    console.log(starsRef, "service")
    return starsRef ;
    
  }

  // Get all stars that belog to a Movie
  getMovieStars(movieId) {
    
    const starsRef = this.afs.collection('stars', ref => ref.where('movieId', '==', movieId) );
    return starsRef.valueChanges();
  }

  // Create or update star
  setStar(userId, movieId, value) {
    // Star document data
   
    
    // Custom doc ID for relationship
    const starPath = `stars/${userId}_${movieId}`;
    
          let star: Star = { userId, movieId, value };
          
          return this.afs.doc(starPath).set(star)
       
            
    // Set the data, return the promise
    
  }

}