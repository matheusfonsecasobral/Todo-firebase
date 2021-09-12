import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.afAuth.signInWithPopup(new auth.GoogleAuthProvider());
    this.afAuth.onAuthStateChanged((data) => {
      if (data) {
        this.router.navigateByUrl('/all')
      } else {
        // No user is signed in.
      }
    });

  }
}
