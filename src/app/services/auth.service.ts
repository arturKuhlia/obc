import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppUser } from '../models/appuser';
import { AngularFirestore } from '@angular/fire/firestore';
import { async } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';



export class User {

  uid: string;
  username: string = "";

  constructor(auth) {
    this.uid = auth.uid
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {




  currentUser: User;
  appUser$: Observable<AppUser>;


  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;


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


  get hasUsername() {
    return this.appUser$.subscribe(usr=> usr.displayName) ? true : false
  }

  checkUsername(username: string) {
    username = username.toLowerCase()
    return this.db.doc(`usernames/${username}`)
  }

  updateUsername(username: string) {

    let data = {}
    data[username] = this.appUser$.subscribe(usr=> usr)

    this.db.doc(`/users/${this.appUser$.subscribe(usr=> usr.uid)}`).update({"username": username})
    this.db.doc(`/usernames`).update(data)
  }

  async googleLogin() {
    // Store the return URL in localstorage, to be used once the user logs in successfully
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);

    const credential = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return this.updateUserData(credential.user);

  }
 

 

    async signup(user) {
    console.log(user);
    this.afAuth.auth.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.displayName
        });

        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/home']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`appusers/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      displayName: this.newUser.displayName
  
    })
  }








  async signIn(email: string, password: string) {

    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);

    const credential = await   this.afAuth.auth
    .signInWithEmailAndPassword(email, password)
    
    this.updateUserData(credential.user);

  
  }



  async resetPassword(email: string) {

    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);

    const credential = await   this.afAuth.auth
    .sendPasswordResetEmail(email)
    

  
  }




  async login() {
    // Store the return URL in localstorage, to be used once the user logs in successfully
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);

    const credential = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.updateUserData(credential.user);
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
      uid: user.uid
    };
    return userRef.set(data, { merge: true });
  }
}
