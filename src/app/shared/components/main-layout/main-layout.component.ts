import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpBooksService } from '../../service/http-books.service';
import { Categories, Sorting } from '../../service/categories.types';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListBooksService } from '../../service/list-books.service';
import { combineLatest, debounceTime, startWith, Subject, switchMap, tap } from 'rxjs';

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
    ) {}

    ngOnInit(): void {
        console.log('MainLayoutComponent');

        this.form = new FormGroup({
            search: new FormControl('', Validators.required),
            categories: new FormControl(Categories.All, Validators.required),
            orderBy: new FormControl(Sorting.Relevance, Validators.required),
        });

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
                tap((data) => this.listBooks.setListBooks(data.items!)),
            )
            .subscribe();
    }

    submit() {
        if (this.form.valid) {
            this.data$.next();
        }
    }
}
