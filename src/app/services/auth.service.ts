import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AppUser } from '../models/appuser';
import { AngularFirestore } from '@angular/fire/firestore';
<<<<<<< HEAD
import { async } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';



export class User {

  uid: string;
  username: string = "";

  constructor(auth) {
    this.uid = auth.uid
  }

}

=======
>>>>>>> tmp
@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD




  currentUser: User;
  appUser$: Observable<AppUser>;


  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;


=======
  appUser$: Observable<AppUser>;
>>>>>>> tmp
  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore) {
    // Get the auth state, then fetch the Firestore user document or return null
    this.appUser$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
<<<<<<< HEAD
        
=======
          this.db.doc<AppUser>(`appusers/${user.uid}`).valueChanges().forEach(result => console.log(result));
>>>>>>> tmp
          return this.db.doc<AppUser>(`appusers/${user.uid}`).valueChanges();
          
        } else {
          return of(null);
        }
      })
    );
  }
  async emailSignUp(email: string, password: string, name: string) {
    const returnUrl = "/app/tabs/verify-email-address";
    localStorage.setItem('returnUrl', returnUrl);

<<<<<<< HEAD

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
=======
    var nameAvailable: boolean
    this.checkUsername(name).then(res => {
      if (res) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
          .then((result) => {

            this.updateUsername(name, result.user)
            return result
          }).then((result) => {
            this.SendVerificationMail()

            var userInfo = Object.assign({}, result.user)
            userInfo.displayName = name
            this.updateUserData(userInfo);

          })
          .catch((error) => {
            window.alert(error.message)
          });
      } else {
        window.alert("This username is already taken")
      }
    }
    );
  }

  ForgotPassword(passwordResetEmail) {
    return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
  }

  emailSignIn(email: string, password: string) {
>>>>>>> tmp
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);
   
    return this.afAuth.auth.signInWithEmailAndPassword(email.toString().trim(), password)
    .then(() => { 
      console.log("Logged in");
      
    }).catch((error) => {
      window.alert(error)
    })
  }

  async checkUsername(username: string): Promise<boolean> {
    username = username.toLowerCase()
    let k = await this.db.doc(`usernames/${username}`).get().toPromise()
      .then(docSnapshot => {
        let b: boolean = true;
        if (docSnapshot.exists) {
          b = false
        }
        return b
      });
    return k
  }

  updateUsername(username: string, currentUser: any) {
    let data = {
      email: currentUser.email,
      uid: currentUser.uid,
    }
    this.db.doc(`/usernames/${username}`).set(data, { merge: true })
  }

  validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  SendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email-address']);
      })
  }

  async login() {
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
