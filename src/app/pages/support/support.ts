import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AlertController, ToastController } from '@ionic/angular';

import { AngularFirestore } from '@angular/fire/firestore';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
  styleUrls: ['./support.scss'],
})
export class SupportPage {
  submitted = false;
  supportMessage: string;
  appUser:any
  
  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    private db: AngularFirestore,
    private authService: AuthService
  ) { }


 ngOnInit() { 
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser.uid);

     
}

 

  async submit(form: NgForm) {
    this.submitted = true;

      let usrUid= this.appUser.uid


    if (form.valid) {

       this.db.collection('support').add({"message":this.supportMessage,"user":usrUid, "time": Date.now()});
      this.supportMessage = '';
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      await toast.present();
    }
  }



ionViewCanLeave() {
  if (this.supportMessage.length>0) {
      return new Promise((resolve, reject) => {
        let alert = this.alertCtrl.create({
          title: 'Are you sure?',
          message: 'The form data may be lost',
          buttons: [
            {
              text: 'Stay',
              role: 'cancel',
              handler: () => {
                console.log('User stayed');
                this.userCanLeave = false;
                reject();
              }
            },
            {
              text: 'Leave',
              handler: () => {
                console.log('User leaves');
                this.userCanLeave = true;
                resolve();
              }
            },
            {
              text: 'Save',
              handler: () => {
                console.log('User saved data');
                // do saving logic
                this.userCanLeave = true;
                resolve();
              }
            }
          ]
        });
        alert.present();
      });
    } else { return true }
  }


 



}
