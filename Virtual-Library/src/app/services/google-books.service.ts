import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';


@Injectable()
export class GoogleBookService{
    private _url = "https://www.googleapis.com/books/v1/volumes?q=";
    constructor(private _http: Http){

    }
    
    getFavorites() : Promise<any>{
      return this._http.get('/favoritesList')
            .map(res => res.json())
            .toPromise()
    }

    
    setFavorites(favorites) : Promise<any>{
      return  this._http.post('/favoritesList',favorites)
            .toPromise()
    }

    getBooks(name, index) : Promise<any>{
      return this._http.get(this._url + name + "&maxResults=5&startIndex=" + index)
            .map(res => res.json())
            .toPromise();
    }

    getBook(name, author) : Promise<any>{
      return this._http.get(this._url + name + "+inauthor:" + author + "&maxResults=1")
            .map(res => res.json())
            .toPromise();
    }

}