import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-item-book',
    templateUrl: './item-book.component.html',
    styleUrls: ['./item-book.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemBookComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        console.log('ItemBookComponent');
    }
}
