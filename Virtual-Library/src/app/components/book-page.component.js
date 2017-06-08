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
let BookPageComponent = class BookPageComponent {
    constructor(_postService, _route, _router) {
        this._postService = _postService;
        this._route = _route;
        this._router = _router;
        this.isLoading = true;
    }
    ngOnInit() {
        this.subscription = this._route.params.subscribe(params => {
            this._postService.getBook(params["name"], params["author"])
                .then(posts => {
                this.book = posts.items[0];
                this.isLoading = false;
            });
        });
    }
    ;
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    ;
};
BookPageComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [google_books_service_1.GoogleBookService,
        router_1.ActivatedRoute,
        router_1.Router])
], BookPageComponent);
exports.BookPageComponent = BookPageComponent;
//# sourceMappingURL=book-page.component.js.map