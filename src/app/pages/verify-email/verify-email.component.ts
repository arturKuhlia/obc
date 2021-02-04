import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../models/appuser';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  user: AppUser;
  constructor(
    public authService: AuthService
  ) { }
  

  ngOnInit() {
   
    this.authService.appUser$.subscribe(appUser => this.user = appUser);
  
 


  }

}