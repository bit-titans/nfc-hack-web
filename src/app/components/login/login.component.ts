import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any;
  passwd:any;
  constructor(public afAuth: AngularFireAuth,private router:Router) { }

  ngOnInit() {
    console.log(this.afAuth.user);
    if(this.afAuth.user)
    {
      this.router.navigateByUrl("/add");
    }
    
  }
  login(){
    this.afAuth.auth.signInWithEmailAndPassword(this.email,this.passwd).catch(e=>{window.alert(e)});
      this.afAuth.auth.onAuthStateChanged(user=>{
     if (user) {
       // User is signed in.
       this.router.navigateByUrl('/add')
     } else {
       // User is signed out.
       // ...
     }
   });
   
 }

}
