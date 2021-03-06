import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage { 
  constructor(public platform: Platform){}
  public devWidth = this.platform.width();

  appPages = [
    {
      title: 'Home',
      tab: 'allblogs',
      icon: 'home'
    },
  {
    title: 'Explore',
    tab: 'doc',
    icon: 'document-text'
  },
  {
    title: 'Search',
    tab: 'search',
    icon: 'search'
  },
  {
    title: 'Bookmarks',
    tab: 'bookmarks',
    icon: 'bookmark'
  },
 
];}
