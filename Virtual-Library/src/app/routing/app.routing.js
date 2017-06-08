"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const home_component_1 = require("../components/home.component");
const favorites_component_1 = require("../components/favorites.component");
const search_page_component_1 = require("../components/search-page.component");
const not_found_component_1 = require("../components/not-found.component");
const book_page_component_1 = require("../components/book-page.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'favorites', component: favorites_component_1.FavoritesComponent },
    { path: 'book/:name/:author', component: book_page_component_1.BookPageComponent },
    { path: 'search/:name', component: search_page_component_1.SearchPageComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent }
]);
//# sourceMappingURL=app.routing.js.map