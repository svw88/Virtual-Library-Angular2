"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const google_books_service_1 = require("../services/google-books.service");
const router_1 = require("@angular/router");
let SearchPageComponent = class SearchPageComponent {
    constructor(_postService, _route, _router) {
        this._postService = _postService;
        this._route = _route;
        this._router = _router;
        this.isLoading = true;
        this.index = 1;
    }
    ngOnInit() {
        this.subscription = this._route.params.subscribe(params => {
            this._postService.getBooks(params["name"], 0)
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
    }
    ;
    onPageChange($event) {
        this.isLoading = true;
        this.index = $event;
        this._postService.getBooks(this.search, (this.index * 5) - 5)
            .then(posts => {
            this.books = posts.items;
            this.isLoading = false;
        });
    }
    isFavorite(book) {
        if (this.favorites.find(item => item.title == book.title && item.published == book.published) == undefined)
            return false;
        return true;
    }
    changeFavorites($event) {
        if ($event.value) {
            this.favorites.push($event.book);
        }
        else {
            this.favorites.splice(this.favorites.indexOf(this.favorites.find(item => item.title == $event.book.title && item.published == $event.book.published)), 1);
        }
        ;
        this._postService.setFavorites(this.favorites);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ;
    onBookClick(title, author) {
        this._router.navigate(['book', title, author]);
    }
};
SearchPageComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [google_books_service_1.GoogleBookService,
        router_1.ActivatedRoute,
        router_1.Router])
], SearchPageComponent);
exports.SearchPageComponent = SearchPageComponent;
//# sourceMappingURL=search-page.component.js.map