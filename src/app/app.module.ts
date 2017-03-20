import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoListComponent} from '../todos/todos-list/todo-list.component';
import {TodoDetailComponent} from '../todos/todo-detail/todo-detail.component'; 
import { Logger } from '../shared/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
