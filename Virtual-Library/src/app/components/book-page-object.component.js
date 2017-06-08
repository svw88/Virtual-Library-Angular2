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
let BookPageObjectComponent = class BookPageObjectComponent {
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BookPageObjectComponent.prototype, "book", void 0);
BookPageObjectComponent = __decorate([
    core_1.Component({
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
], BookPageObjectComponent);
exports.BookPageObjectComponent = BookPageObjectComponent;
//# sourceMappingURL=book-page-object.component.js.map