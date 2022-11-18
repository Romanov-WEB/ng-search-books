import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent implements OnInit {
    constructor(public loader: LoaderService) {}

    ngOnInit(): void {
        console.log('LoaderComponent');
    }
}
