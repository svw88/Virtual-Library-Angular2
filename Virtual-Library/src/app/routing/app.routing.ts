
import  {Router, RouterModule } from '@angular/router';

import { HomeComponent } from '../components/home.component';
import { FavoritesComponent } from '../components/favorites.component';
import { SearchPageComponent } from '../components/search-page.component';
import { NotFoundComponent } from '../components/not-found.component';
import { BookPageComponent } from '../components/book-page.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent},
    { path: 'favorites', component: FavoritesComponent},
    { path: 'book/:name/:author', component: BookPageComponent},
    { path: 'search/:name', component: SearchPageComponent},
    { path: '**', component: NotFoundComponent}
]);