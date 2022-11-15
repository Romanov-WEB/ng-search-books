import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ListBooksService } from '../shared/service/list-books.service';

@Component({
    selector: 'app-list-books',
    templateUrl: './list-books.component.html',
    styleUrls: ['./list-books.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListBooksComponent implements OnInit {
    constructor(private readonly list: ListBooksService) {}

    ngOnInit(): void {
        console.log('ListBooksComponent');
        this.list.listBooks$.subscribe((data) => {
            console.log(data);
        });
    }
}
