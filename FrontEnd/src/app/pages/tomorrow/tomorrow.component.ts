import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tomorrow',
  templateUrl: './tomorrow.component.html',
  styleUrls: ['./tomorrow.component.scss']
})
export class TomorrowComponent implements OnInit {
  todos: any[] = [];

  constructor(private service: DataService, private afAuth: AngularFireAuth) {

  }

  ngOnInit(): void {
    this.afAuth.idToken.subscribe(token => {
      this.service.getTomorrowTodos(token)
        .subscribe((data: any) => this.todos = data, error => console.log(error), () => console.log(this.todos))
    })
  }


}
