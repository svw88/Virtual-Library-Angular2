import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    template: `
        <i class="glyphicon glyphicon-x2"
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="onClick()">
        </i>
        `
})

export class FavoriteComponent {
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();

    onClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}