import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListBooksService } from './list-books.service';

@Component({
    selector: 'app-list-books',
    templateUrl: './list-books.component.html',
    styleUrls: ['./list-books.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBooksComponent implements OnInit {
    constructor(public readonly list: ListBooksService) {}

    ngOnInit(): void {
        console.log('ListBooksComponent');
    }
}
