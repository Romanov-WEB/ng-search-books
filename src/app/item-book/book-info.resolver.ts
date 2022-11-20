import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpBooksService } from '../shared/service/http-books.service';
import { ItemsBooks } from '../shared/service/data-books';

@Injectable({
    providedIn: 'root',
})
export class BookInfoResolver implements Resolve<ItemsBooks> {
    constructor(private booksService: HttpBooksService) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ItemsBooks> {
        return this.booksService.getBook(route.paramMap.get('id')!);
    }
}
