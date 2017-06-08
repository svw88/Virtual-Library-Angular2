"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const app_routing_1 = require("./routing/app.routing");
const google_books_service_1 = require("./services/google-books.service");
const app_component_1 = require("./app.component");
const book_list_object_component_1 = require("./components/book-list-object.component");
const navigation_component_1 = require("./components/navigation.component");
const home_component_1 = require("./components/home.component");
const not_found_component_1 = require("./components/not-found.component");
const favorites_component_1 = require("./components/favorites.component");
const search_page_component_1 = require("./components/search-page.component");
const search_component_1 = require("./components/search.component");
const favorite_component_1 = require("./components/favorite.component");
const book_page_component_1 = require("./components/book-page.component");
const book_page_object_component_1 = require("./components/book-page-object.component");
const pagination_component_1 = require("./components/pagination.component");
const highlight_pipe_1 = require("./pipes/highlight.pipe");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            app_routing_1.routing,
            http_1.HttpModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [app_component_1.AppComponent,
            navigation_component_1.NavigationComponent,
            home_component_1.HomeComponent,
            not_found_component_1.NotFoundComponent,
            favorites_component_1.FavoritesComponent,
            book_list_object_component_1.BookListObjectComponent,
            search_page_component_1.SearchPageComponent,
            search_component_1.SearchComponent,
            favorite_component_1.FavoriteComponent,
            book_page_component_1.BookPageComponent,
            book_page_object_component_1.BookPageObjectComponent,
            pagination_component_1.PaginationComponent,
            highlight_pipe_1.HighlightPipe
        ],
        providers: [google_books_service_1.GoogleBookService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map