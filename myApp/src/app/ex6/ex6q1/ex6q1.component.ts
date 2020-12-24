import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex6q1',
  templateUrl: './ex6q1.component.html',
  styleUrls: ['./ex6q1.component.css']
})
export class Ex6q1Component implements OnInit {

  user: any = {}
  todos: any[] = []

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  getUser(id: number): void {
    this.http.get("https://jsonplaceholder.typicode.com/users/" + id)
      .subscribe(data => {
        this.user = data

        this.handleTodos()
      }
    )
  }

  handleTodos(): void {
    if(this.user.name.startsWith('E')) {
      this.getTodos()
    } else {
      this.todos = []
    }
  }

  getTodos(): void {
    this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos")
      .subscribe(data => {
        this.todos = data.filter(task => task.userId == this.user.id)
      })    
  }
}
