import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation',
  template: `
    <nav class="navbar navbar-inverse nav-background">
      <div class="container-fluid" align="center">
      <ul class="nav navbar-nav pull-left display-inline">
         <li><a routerLink="/">Home</a></li>
          <li><a routerLink="favorites">Favorites</a></li>         
        </ul>
        <search *ngIf="router.url != '/'"></search>
      </div><!-- /.container-fluid -->
    </nav>
    `
})
export class NavigationComponent {
  constructor(private router: Router){

    }
}