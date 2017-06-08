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
const forms_1 = require("@angular/forms");
const router_1 = require("@angular/router");
let SearchComponent = class SearchComponent {
    constructor(_router) {
        this._router = _router;
        this.form = new forms_1.FormGroup({
            search: new forms_1.FormControl()
        });
    }
    ;
    search() {
        this._router.navigate(['search', this.form.controls.search.value]);
    }
};
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        template: `
    <form class="display-inline" [formGroup]="form" (ngSubmit)="search()">
    <div class="form-group">
          <input formControlName="search" id="search" type="text" class="form-control" placeholder="Search">
          <button type="submit" class="btn btn-default">Search</button> 
    </div>
    </form>
    `
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map