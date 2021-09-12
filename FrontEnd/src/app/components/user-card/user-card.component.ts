import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  user: any = {
    name: "",
    picture: "http://placehold.it/200"
  }

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.afAuth.user.subscribe((data) => {
      this.user.name = data?.displayName;
      this.user.picture = data?.photoURL;
    })
  }

  logout() {
    this.afAuth.signOut();
    this.afAuth.onAuthStateChanged((data) => {
      if (data) {

      } else {
        this.router.navigateByUrl('/login')
      }
    });
  }
}
