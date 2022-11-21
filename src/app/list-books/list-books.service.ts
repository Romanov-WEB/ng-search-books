import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, zip } from 'rxjs';
import { ItemsBooks } from '../shared/service/data-books';

@Injectable({
    providedIn: 'root',
})
export class ListBooksService {
    listBooks$: BehaviorSubject<ItemsBooks[]> = new BehaviorSubject<ItemsBooks[]>([]);

    constructor() {}

    setListBooks(books: ItemsBooks[]): void {
        const array1$: Observable<ItemsBooks[]> = of(this.listBooks$.value);
        const array2$: Observable<ItemsBooks[]> = of(books);

        zip(array1$, array2$)
            .pipe(map(([res, res2]) => [...res.values(), ...res2.values()]))
            .subscribe((res) => this.listBooks$.next(res));
    }
}
