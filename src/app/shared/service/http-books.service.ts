import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { GetBooksAll } from './get-books-all';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HttpBooksService {
    constructor(private readonly http: HttpClient) {}

    getBooksAll(params: GetBooksAll): Observable<any> {
        return this.http.get(
            `${environment.urlBooks}"${params.search}"${
                params.categories !== 'all' ? '+subject:' + params.categories : ''
            }&startIndex=${params.startIndex}&maxResults=${params.maxResults}&orderBy=${params.orderBy}`
        );
    }
}
