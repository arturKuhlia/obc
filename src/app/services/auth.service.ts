import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppUser } from '../models/appuser';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  appUser$: Observable<AppUser>;

  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore) {

    // Get the auth state, then fetch the Firestore user document or return null
    this.appUser$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // If the user is logged in, return the user details.
        if (user) {
          return this.db.doc<AppUser>(`appusers/${user.uid}`).valueChanges();
        } else {
          // If the user is NOT logged in, return null.
          return of(null);
        }
      })
    );
  }



  async emailSignUp(email:string,password:string, name:string) {
     

    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);


    return await  this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      /* Call the SendVerificaitonMail() function when new user sign
      up and returns promise */
      this.SendVerificationMail();

      var userInfo = Object.assign({}, result.user) 

      
      userInfo.displayName=  name 
      this.updateUserData(userInfo);
    }).catch((error) => {
      window.alert(error.message)
    });


    

   
    
    return 
  }


  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
    .then(() => {
      this.router.navigate(['verify-email-address']);
    })
  }

  async login() {
    // Store the return URL in localstorage, to be used once the user logs in successfully
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);

    const credential = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return this.updateUserData(credential.user);
  }

  async logout() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }


 
  // Save the user data to firestore on login
  private updateUserData(user) {
    const userRef = this.db.doc(`appusers/${user.uid}`);
    const data = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      uid:user.uid
    };
    return userRef.set(data, { merge: true });
  }
}
