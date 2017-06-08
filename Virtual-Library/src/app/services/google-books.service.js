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
const http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
const core_1 = require("@angular/core");
let GoogleBookService = class GoogleBookService {
    constructor(_http) {
        this._http = _http;
        this._url = "https://www.googleapis.com/books/v1/volumes?q=";
    }
    getFavorites() {
        return this._http.get('/favoritesList')
            .map(res => res.json())
            .toPromise();
    }
    setFavorites(favorites) {
        return this._http.post('/favoritesList', favorites)
            .toPromise();
    }
    getBooks(name, index) {
        return this._http.get(this._url + name + "&maxResults=5&startIndex=" + index)
            .map(res => res.json())
            .toPromise();
    }
    getBook(name, author) {
        return this._http.get(this._url + name + "+inauthor:" + author + "&maxResults=1")
            .map(res => res.json())
            .toPromise();
    }
};
GoogleBookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GoogleBookService);
exports.GoogleBookService = GoogleBookService;
//# sourceMappingURL=google-books.service.js.map