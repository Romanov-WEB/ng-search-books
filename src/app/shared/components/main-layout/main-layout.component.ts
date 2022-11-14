import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpBooksService } from '../../service/http-books.service';
import { Categories, Sorting } from '../../service/categories.types';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
    constructor(private readonly booksData: HttpBooksService) {}

    ngOnInit(): void {
        console.log('MainLayoutComponent');
        this.booksData
            .getBooksAll({
                search: 'js',
                startIndex: 0,
                maxResults: 1,
                categories: Categories.All,
                orderBy: Sorting.Relevance,
            })
            .subscribe((data) => {
                console.log(data);
            });
    }
}
