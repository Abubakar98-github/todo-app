import { Component, Output, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule,
  FormsModule,

],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {
title:string = "";
desc:string = "";


@Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

onSubmit(){
  const todo ={
    
    sno:1,
    title: this.title,
    desc: this.desc
  }
  this.todoAdd.emit(todo);
}

}
