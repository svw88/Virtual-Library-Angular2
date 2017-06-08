import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import {Router} from '@angular/router';

@Component({
  selector: 'search',
  template: `
    <form class="display-inline" [formGroup]="form" (ngSubmit)="search()">
    <div class="form-group">
          <input formControlName="search" id="search" type="text" class="form-control" placeholder="Search">
          <button type="submit" class="btn btn-default">Search</button> 
    </div>
    </form>
    `
})
export class SearchComponent {
    form: FormGroup;
    constructor(private _router: Router){
        this.form = new FormGroup({
            search: new FormControl()
        });
    };

    search(){
        this._router.navigate(['search', this.form.controls.search.value]);
    }

 }