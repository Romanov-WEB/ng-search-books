import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpBooksService } from '../../service/http-books.service';
import { Categories, Sorting } from '../../service/categories.types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListBooksService } from '../../service/list-books.service';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, of, switchMap, tap } from 'rxjs';
import { DataBooks, ItemsBooks } from '../../service/data-books';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent implements OnInit {
    categories = Object.values(Categories);
    sorts = Object.values(Sorting);
    form!: FormGroup;

    constructor(
        private readonly booksData: HttpBooksService,
        private readonly listBooks: ListBooksService,
        private readonly router: Router,
    ) {}

    ngOnInit(): void {
        console.log('MainLayoutComponent');
        this.form = new FormGroup({
            search: new FormControl('', Validators.required),
            categories: new FormControl(Categories.All, Validators.required),
            orderBy: new FormControl(Sorting.Relevance, Validators.required),
        });
    }

    submit() {
        this.booksData.getBooksAll({
                search: this.form.value.search,
                categories: this.form.value.categories,
                orderBy: this.form.value.orderBy,
                startIndex: 0,
                maxResults: 30,
            })
            .pipe(
                switchMap((data) => this.listBooks.setListBooks(data.items!)),
                tap(() => this.router.navigate(['/books-list'])),
            ).subscribe()
    }
}
