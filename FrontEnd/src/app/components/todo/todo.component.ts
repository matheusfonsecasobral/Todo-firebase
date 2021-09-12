import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todos: any = null;

  constructor(
    private dataService: DataService,
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {

  }

  markAsDone(todo: any) {
    this.afAuth.idToken.subscribe(token => {
      const data = { id: todo.id }
      this.dataService.markAsDone(data, token).subscribe(
        res => { todo.done = true }
      );
    })
  }


}
