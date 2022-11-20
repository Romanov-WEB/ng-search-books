import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ItemsBooks } from '../shared/service/data-books';

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
