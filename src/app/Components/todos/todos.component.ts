import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from "../../Todo"
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
    selector: 'app-todos',
    standalone: true,
    templateUrl: './todos.component.html',
    styleUrl: './todos.component.css',
    imports: [CommonModule, TodoItemComponent, AddTodoComponent]
})

export class TodosComponent {
localItem:string;
  todos: Todo[];

constructor(){
this.localItem = localStorage.getItem("todos") as string;
if (this.localItem == null){
  this.todos = [];
}
else{
  this.todos = JSON.parse("todos") 
}
}

deleteTodo(todo:Todo){
  console.log(todo);
  const index = this.todos.indexOf(todo);
  this.todos.splice(index, 1)
  localStorage.setItem("todos" , JSON.stringify(this.todos));
}

addTodo(todo:Todo){
  console.log(todo);
  this.todos.push(todo);
  localStorage.setItem("todos" , JSON.stringify(this.todos));
}
}


