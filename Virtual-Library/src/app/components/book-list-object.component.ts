import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Favorite } from '../interfaces/favorite';

@Component({
  selector: 'bookListObject',  
  template: `
    <div [ngClass]="{'favorite-background' : isFavorite}" class="media list-item-border cursor-pointer">
        <div class="media-left vertical-align-middle">
           <img [src]="book.imgUrl" alt="Image not available" class="media-object thumb" style="width:100px">
        </div>
        <div class="media-body vertical-align-middle">
            <h4 class="media-heading" [innerHtml]="book.title | highlight : search"></h4>
            <div>
            <label>Authors: </label>
            <label *ngFor="let author of book.authors">({{author}})</label>
            </div>
            <div>
            <label>Published: </label>
            <label>{{book.published}}</label>
            </div>
        </div>
         <div class="media-right vertical-align-middle">
            <favorite [isFavorite]="isFavorite" 
                (click)="onFavoriteClick($event)" 
                (change)="onFavoriteChange($event)">
            </favorite>
        </div>
    </div>
    `
})
export class BookListObjectComponent{
     @Input() book: Favorite;
     @Input() isFavorite;
     @Input() search;
     @Output() favoriteChange = new EventEmitter();


    onFavoriteClick($event){
        $event.stopPropagation();
    }

     onFavoriteChange($event){ 
        this.isFavorite = $event.newValue;
        this.favoriteChange.emit({value: $event.newValue, book: this.book});
                               
    }
 }