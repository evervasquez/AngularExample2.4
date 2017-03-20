import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    template: `<h1>ToDo List example</h1>
                <todo-list></todo-list>`,
})
export class AppComponent {
  title = 'app works!';
}
