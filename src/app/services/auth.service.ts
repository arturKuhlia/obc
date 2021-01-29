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
   var nameAvailable:boolean
    this.checkUsername(name).then(res =>{
  
      if ( res ){ 
        
        return   this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.updateUsername(name, result.user)
  
        this.SendVerificationMail()
  
        var userInfo = Object.assign({}, result.user) 
        
  
        userInfo.displayName=  name 
        this.updateUserData(userInfo);
      }).catch((error) => {
        window.alert(error.message)
      });
      }else{
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
  
  async emailSignIn(email:string,password:string) {
     

    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);
  
      
    return await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
       
      var userInfo = Object.assign({}, result.user) 
      

      userInfo.displayName=  name 
      this.updateUserData(userInfo);
    }).catch((error) => {
      window.alert(error.message)
    });
  }

  

 async checkUsername(username: string): Promise<boolean>  {
    username = username.toLowerCase()
    
    let k = await this.db.doc(`usernames/${username}`).get().toPromise() 
    .then(docSnapshot => {
      let b: boolean = true;
      if (docSnapshot.exists) { 
         b = false
      }
      return b
    });
      return  k
  }


  updateUsername(username: string,currentUser:any) {
    let data = {
      email: currentUser.email,
      uid: currentUser.uid,
    } 
    this.db.doc(`/usernames/${username}`).set(data, { merge: true })
  }

  
  validateEmail(email:string) {

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
      uid:user.uid
    };
    return userRef.set(data, { merge: true });
  }
}
