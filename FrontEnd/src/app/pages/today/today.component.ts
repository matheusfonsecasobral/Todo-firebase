import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  todos: any[] = [];

  constructor(private service: DataService, private afAuth: AngularFireAuth) {

  }

  ngOnInit(): void {
    this.afAuth.idToken.subscribe(token => {
      this.service.getTodayTodos(token)
        .subscribe((data: any) => this.todos = data, error => console.log(error), () => console.log(this.todos))
    })
  }

}
