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
let BookListObjectComponent = class BookListObjectComponent {
    constructor() {
        this.favoriteChange = new core_1.EventEmitter();
    }
    onFavoriteClick($event) {
        $event.stopPropagation();
    }
    onFavoriteChange($event) {
        this.isFavorite = $event.newValue;
        this.favoriteChange.emit({ value: $event.newValue, book: this.book });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BookListObjectComponent.prototype, "book", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BookListObjectComponent.prototype, "isFavorite", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BookListObjectComponent.prototype, "search", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BookListObjectComponent.prototype, "favoriteChange", void 0);
BookListObjectComponent = __decorate([
    core_1.Component({
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
], BookListObjectComponent);
exports.BookListObjectComponent = BookListObjectComponent;
//# sourceMappingURL=book-list-object.component.js.map