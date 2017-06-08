import { Component, OnInit } from '@angular/core';
import { GoogleBookService } from '../services/google-books.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  template: `
     <div *ngIf="isLoading">
          <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <div *ngIf="!isLoading ">
        <bookListObject 
            *ngFor="let b of books"
            [book]="{authors: b.authors,
                     imgUrl: b.imgUrl,
                     published: b.published,
                     title: b.title
                    }"                                         
            (click)="onBookClick(b.title, b.authors[0])"
            (favoriteChange)="changeFavorites($event)"
            [isFavorite]="true">
        </bookListObject> 
    </div>     
    `
})
export class FavoritesComponent implements OnInit {
   isLoading = true;
   books;

    constructor(private _postService: GoogleBookService, 
                private _route: ActivatedRoute,
                private _router: Router)
                {     
    }

    ngOnInit(){        
           this._postService.getFavorites()
             .then(posts => { 
                this.books = posts;
                this.isLoading = false;                          
        });  
    };

    changeFavorites($event){
        if($event.value)
         {
             this.books.push($event.book);
              
         }else{
            this.books.splice(this.books.indexOf(this.books.find(item => item.title == $event.book.title && item.published == $event.book.published )),1);
         };
        this._postService.setFavorites(this.books);
    }

    onBookClick(title,author){
        this._router.navigate(['book', title, author]);
    }
 }