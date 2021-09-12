import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  todos: any[] = [];

  constructor(private service: DataService, private afAuth: AngularFireAuth) {

  }

  ngOnInit(): void {
    this.afAuth.idToken.subscribe(token => {
      this.service.getAllTodos(token)
        .subscribe((data: any) => this.todos = data, error => console.log(error), () => console.log(this.todos))
    })
  }

}
