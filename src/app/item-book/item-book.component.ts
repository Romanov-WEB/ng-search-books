import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpBooksService } from '../shared/service/http-books.service';
import { ActivatedRoute, Route } from '@angular/router';
import { tap } from 'rxjs';

@Component({
    selector: 'app-item-book',
    templateUrl: './item-book.component.html',
    styleUrls: ['./item-book.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemBookComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        console.log('ItemBookComponent');
        this.route.data.pipe(tap(console.log)).subscribe();
    }
}
