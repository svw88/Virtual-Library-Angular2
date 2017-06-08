import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleBookService } from '../services/google-books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <div *ngIf="isLoading">
          <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <div *ngIf="!isLoading ">
        <bookListObject 
            *ngFor="let b of books"
            [book]="{title: b.volumeInfo.title,
                     imgUrl: b.volumeInfo.imageLinks?.thumbnail,
                     authors: b.volumeInfo.authors,
                     published: b.volumeInfo.publisher + ' - ' + b.volumeInfo.publishedDate
                    }" 
            [isFavorite]="isFavorite({title: b.volumeInfo.title,
                     imgUrl: b.volumeInfo.imageLinks?.thumbnail,
                     authors: b.volumeInfo.authors,
                     published: b.volumeInfo.publisher + ' - ' + b.volumeInfo.publishedDate
                    })"  
            [search]="search"                                      
            (click)="onBookClick(b.volumeInfo.title, b.volumeInfo.authors[0])"
            (favoriteChange)="changeFavorites($event)">
        </bookListObject> 
        <pagination (change)="onPageChange($event)" [index]="index"></pagination>
    </div>     
    `
})
export class SearchPageComponent implements OnInit, OnDestroy { 
        isLoading = true;
        subscription;
        favorites;
        books;
        index = 1;
        search;

    constructor(private _postService: GoogleBookService, 
                private _route: ActivatedRoute,
                private _router: Router)
                {   
    }

    ngOnInit(){
       this.subscription = this._route.params.subscribe(params => {        
           this._postService.getBooks(params["name"],0)
             .then(posts => { 
                this.books = posts.items;
                this.isLoading = false;    
                 this.index = 1;   
                 this.search = params["name"];                     
        });         
           this._postService.getFavorites()
             .then(posts => { 
                this.favorites = posts;                        
        });
        
      });     
    };

     onPageChange($event){
            this.isLoading = true;
            this.index = $event; 
            this._postService.getBooks(this.search, (this.index * 5) - 5)
             .then(posts => { 
                this.books = posts.items;
                this.isLoading = false;                           
        });  
      

    }

    isFavorite(book){
        if(this.favorites.find(item => item.title == book.title && item.published == book.published ) == undefined)
            return false;

        return true ;   

    }


    changeFavorites($event){
        if($event.value)
         {
             this.favorites.push($event.book);
              
         }else{
             this.favorites.splice(this.favorites.indexOf(this.favorites.find(item => item.title == $event.book.title && item.published == $event.book.published )),1);
         };
        this._postService.setFavorites(this.favorites); 
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    };

    onBookClick(title,author){
        this._router.navigate(['book', title, author]);
    }
}