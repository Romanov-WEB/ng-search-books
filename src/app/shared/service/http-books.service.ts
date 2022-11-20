import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { GetBooksAll } from './get-books-all';
import { Observable } from 'rxjs';
import { DataBooks, ItemsBooks } from './data-books';

@Injectable({
    providedIn: 'root',
})
export class HttpBooksService {
    constructor(private readonly http: HttpClient) {}

    getBooksAll(params: GetBooksAll): Observable<DataBooks> {
        return this.http.get<DataBooks>(environment.urlBooks, {
            params: {
                search: params.search,
                categories: params.categories !== 'all' ? '+subject:' + params.categories : '',
                startIndex: params.startIndex,
                maxResults: params.maxResults,
                orderBy: params.orderBy,
            },
        });
    }

    getBook(id: string): Observable<ItemsBooks> {
        return this.http.get<ItemsBooks>(`${environment.urlBook}${id}`);
    }
}
