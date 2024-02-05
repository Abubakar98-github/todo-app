import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./Components/todos/todos.component";
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    
    imports: [TodosComponent,
      CommonModule,
      RouterOutlet,
      FormsModule
    ]
})
export class AppComponent {
  title = 'Todo-List';
}
