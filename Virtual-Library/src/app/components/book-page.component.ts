import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleBookService } from '../services/google-books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
    <div *ngIf="isLoading">
          <i class="fa fa-spinner fa-spin fa-3x"></i>
    </div>
    <div *ngIf="!isLoading ">
        <bookPageObject 
            [book]="{title: book.volumeInfo.title,
                     imgUrl: book.volumeInfo.imageLinks?.thumbnail,
                     authors: book.volumeInfo.authors,
                     published: book.volumeInfo.publisher + ' - ' + book.volumeInfo.publishedDate,
                     description: book.volumeInfo.description,
                     pageCount: book.volumeInfo.pageCount,
                     maturityRating: book.volumeInfo.maturityRating,
                     buyLink: book.saleInfo.buyLink
                    }"        
            >
        </bookPageObject> 
    </div>     
    `
})
export class BookPageComponent implements OnInit, OnDestroy { 
        isLoading = true;
        subscription;

        book;
    constructor(private _postService: GoogleBookService, 
                private _route: ActivatedRoute,
                private _router: Router)
                {     
    }

    ngOnInit(){
       this.subscription = this._route.params.subscribe(params => {         
           this._postService.getBook(params["name"],params["author"])
             .then(posts => { 
                this.book = posts.items[0];
                this.isLoading = false;                            
        });
      });     
    };

    ngOnDestroy(){
      this.subscription.unsubscribe();
    };

}