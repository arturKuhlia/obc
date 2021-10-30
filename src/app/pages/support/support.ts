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



    if (form.valid) {

       this.db.collection('support').add({"message":this.supportMessage,"user":this.appUser, "time": Date.now()});
      this.supportMessage = '';
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: 'Your support request has been sent.',
        duration: 3000
      });
      await toast.present();
    }
  }




 
}
