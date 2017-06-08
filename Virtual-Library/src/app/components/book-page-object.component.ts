import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/book-object';

@Component({
  selector: 'bookPageObject',  
  template: `
    <div class="media list-item-border">
        <div class="media-body">
            <h4 class="media-heading">{{book.title}}</h4>
            <div>
            <label>Authors: </label>
            <label *ngFor="let author of book.authors">({{author}})</label>
            </div>
            <div>
            <label>Published: </label>
            <label>{{book.published}}</label>
            </div>
            <div>
            <label>Description: </label>
            <p>{{book.description}}</p>
            </div>
             <div>
            <label>Pages: </label>
            <label>{{book.pageCount}}</label>
            </div>
             <div>
            <label>Maturity Rating: </label>
            <label>{{book.maturityRating}}</label>
            </div>
             <div>
            <label>Buy Link: </label>
            <a [href]="book.buyLink">{{book.buyLink}}</a>
            </div>
        </div>
    </div>
    `
})
export class BookPageObjectComponent {
    @Input() book: Book;

 }