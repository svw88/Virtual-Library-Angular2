import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination',
  template: `
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li *ngIf="index > 1">
          <a (click)="onClick(index - 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
            <li *ngIf="index > 2"><a (click)="onClick(index - 2)">{{index - 2}}</a></li>
            <li *ngIf="index > 1"><a (click)="onClick(index - 1)">{{index - 1}}</a></li>
            <li class="active"><a>{{index}}</a></li>
            <li><a (click)="onClick(index + 1)">{{index + 1}}</a></li>
            <li><a (click)="onClick(index + 2)">{{index + 2}}</a></li>
        <li>
          <a (click)="onClick(index + 1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    `
})
export class PaginationComponent {
    @Input() index;
    @Output() change = new EventEmitter();

    onClick(value){
        this.index = value;
        this.change.emit(this.index);
    }
}