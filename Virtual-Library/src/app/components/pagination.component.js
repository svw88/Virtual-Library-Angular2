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
let PaginationComponent = class PaginationComponent {
    constructor() {
        this.change = new core_1.EventEmitter();
    }
    onClick(value) {
        this.index = value;
        this.change.emit(this.index);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "index", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "change", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'pagination',
        template: `
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li *ngIf="index > 1">
          <a (click)="onClick(index - 1)" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
            <li *ngIf="index > 2"><a (click)="onClick(index - 2)">{{index - 2}}</a></li>
            <li *ngIf="index > 1"><a (click)="onClick(index - 1)">{{index - 1}}</a></li>
            <li class="active"><a>{{index}}</a></li>
            <li><a (click)="onClick(index + 1)">{{index + 1}}</a></li>
            <li><a (click)="onClick(index + 2)">{{index + 2}}</a></li>
        <li>
          <a (click)="onClick(index + 1)" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    `
    })
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map