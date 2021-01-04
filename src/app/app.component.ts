import { AuthService } from './services/auth.service';
import { AppUser } from './models/appuser';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  public selectedIndex = 0;
  appUser: AppUser;


  appPages = [
    {
      title: 'Home',
      url: '/app/tabs/allblogs',
      icon: 'information-circle'
    },
    {
      title: 'Explore',
      url: '/app/tabs/doc',
      icon: 'document-text'
    },
    {
      title: 'Ask',
      url: '/app/tabs/addblog',
      icon: 'help-circle'
    },
    {
      title: 'Bookmarks',
      url: '/app/tabs/bookmarks',
      icon: 'bookmark'
    },
  
  ];
  loggedIn = false;
  dark = false;

  constructor(
   
    private authService: AuthService,
   
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    // this.statusBar.overlaysWebView(false);
    // this.statusBar.styleBlackOpaque();
    // this.statusBar.styleDefault();
    
    this.statusBar.backgroundColorByHexString("#df7411");
// this.statusBar.backgroundColorByName("red");

    
    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
    this.authService.appUser$.subscribe(appUser => this.appUser = appUser);
  
    this.authService.appUser$.subscribe(user => {
      if (!user) {
        return;
      } else {
        /*
         * If the user is logged in fetch the return URL from local storage.
         * Navigate to the return URL if available.
         */
        const returnUrl = localStorage.getItem('returnUrl');
        if (!returnUrl) {
          return;
        }
        localStorage.removeItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  

 
  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

   

  // openTutorial() {
  //   this.menu.enable(false);
  //   this.storage.set('ion_did_tutorial', false);
  //   this.router.navigateByUrl('/tutorial');
  // }
}
