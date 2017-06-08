import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <navigation></navigation>
    <div align="center" class="container-fluid main">
      <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent { }
