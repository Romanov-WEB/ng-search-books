import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import { DataBooks, ItemsBooks } from './data-books';

@Injectable({
    providedIn: 'root',
})
export class ListBooksService {
    listBooks$!: Observable<ItemsBooks[]>

    constructor() {}

    setListBooks(books: ItemsBooks[]): Observable<ItemsBooks[]> {
        return this.listBooks$
    }
}
