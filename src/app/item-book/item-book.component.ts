import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ItemsBooks } from '../shared/service/data-books';
import { Location } from '@angular/common';

@Component({
    selector: 'app-item-book',
    templateUrl: './item-book.component.html',
    styleUrls: ['./item-book.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemBookComponent implements OnInit {
    bookData$: Observable<ItemsBooks>

    constructor(
        public readonly route: ActivatedRoute,
        public readonly _location: Location
    ) {
       this.bookData$ = this.route.data
            .pipe(
                map((data) => {
                    const { book } = data;
                    console.log(book)
                    return book;
                }),
            )
    }

    ngOnInit(): void {
        console.log('ItemBookComponent');
    }

    backClicked(): void {
        this._location.back()
    }
}
