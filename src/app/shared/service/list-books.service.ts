import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataBooks, ItemsBooks } from './data-books';

@Injectable({
    providedIn: 'root',
})
export class ListBooksService {
    listBooks$: BehaviorSubject<ItemsBooks[]> = new BehaviorSubject<ItemsBooks[]>([]);

    constructor() {}

    setListBooks(books: ItemsBooks[]): void {
        return this.listBooks$.next(books);
    }
}
