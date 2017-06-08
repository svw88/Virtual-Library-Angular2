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
let FavoritesComponent = class FavoritesComponent {
    constructor(_postService, _route, _router) {
        this._postService = _postService;
        this._route = _route;
        this._router = _router;
        this.isLoading = true;
    }
    ngOnInit() {
        this._postService.getFavorites()
            .then(posts => {
            this.books = posts;
            this.isLoading = false;
        });
    }
    ;
    changeFavorites($event) {
        if ($event.value) {
            this.books.push($event.book);
        }
        else {
            this.books.splice(this.books.indexOf(this.books.find(item => item.title == $event.book.title && item.published == $event.book.published)), 1);
        }
        ;
        this._postService.setFavorites(this.books);
    }
    onBookClick(title, author) {
        this._router.navigate(['book', title, author]);
    }
};
FavoritesComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [google_books_service_1.GoogleBookService,
        router_1.ActivatedRoute,
        router_1.Router])
], FavoritesComponent);
exports.FavoritesComponent = FavoritesComponent;
//# sourceMappingURL=favorites.component.js.map