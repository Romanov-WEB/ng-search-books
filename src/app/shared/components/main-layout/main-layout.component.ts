import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpBooksService } from '../../service/http-books.service';
import { Categories, Sorting } from '../../service/categories.types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListBooksService } from '../../../list-books/list-books.service';
import { combineLatest, debounceTime, startWith, Subject, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

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
    data$ = new Subject<void>();

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
        this.dataList()
    }

    dataList() {
        combineLatest([
            this.data$.pipe(startWith(() => this.data$.next())),
            this.form.valueChanges.pipe(debounceTime(2500)),
        ])
        .pipe(
            switchMap(([_, form]) => {
                return this.booksData.getBooksAll({
                    ...form,
                    startIndex: 0,
                    maxResults: 30,
                });
            }),
            tap((data) => {
                if (this.form.valid) {
                    this.listBooks.setListBooks(data.items!);
                    this.router.navigate(['/']).then();
                }
            }),
        )
        .subscribe();
    }

    submit() {
        this.data$.next();
    }
}
