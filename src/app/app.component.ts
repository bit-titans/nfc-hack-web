import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NFC-HACK-WEB';
  constructor(private afAuth:AngularFireAuth,private router:Router){}
  logout()
  {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login')
  }
}
