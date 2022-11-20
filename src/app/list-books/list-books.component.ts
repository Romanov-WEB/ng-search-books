import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListBooksService } from '../shared/service/list-books.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-books',
    templateUrl: './list-books.component.html',
    styleUrls: ['./list-books.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBooksComponent implements OnInit {
    constructor(public readonly list: ListBooksService, private router: Router) {}

    ngOnInit(): void {
        console.log('ListBooksComponent');
    }

    openBook(id: string): void {
        console.log(id);
        this.router.navigate(['/book', id]).then();
    }
}
