import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


import { routing } from './routing/app.routing';
import { GoogleBookService } from './services/google-books.service';

import { AppComponent }   from './app.component';
import { BookListObjectComponent }   from './components/book-list-object.component';
import { NavigationComponent }   from './components/navigation.component';
import { HomeComponent }   from './components/home.component';
import { NotFoundComponent }   from './components/not-found.component';
import { FavoritesComponent }   from './components/favorites.component';
import { SearchPageComponent }   from './components/search-page.component';
import { SearchComponent }   from './components/search.component';
import { FavoriteComponent } from './components/favorite.component';
import { BookPageComponent } from './components/book-page.component';
import { BookPageObjectComponent } from './components/book-page-object.component';
import { PaginationComponent } from './components/pagination.component';

import { HighlightPipe } from'./pipes/highlight.pipe';

@NgModule({
  imports:      [ BrowserModule,
                  routing,
                  HttpModule,
                  FormsModule,
                  ReactiveFormsModule
                ],
  declarations: [ AppComponent, 
                  NavigationComponent,
                  HomeComponent,
                  NotFoundComponent,
                  FavoritesComponent,
                  BookListObjectComponent,
                  SearchPageComponent,
                  SearchComponent,
                  FavoriteComponent,
                  BookPageComponent,
                  BookPageObjectComponent,
                  PaginationComponent,
                  HighlightPipe
                ],
  providers:    [GoogleBookService],              
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
