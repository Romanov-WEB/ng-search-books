import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    loader$ = new BehaviorSubject<boolean>(false);
    constructor() {}

    onLoader(load: boolean): void {
        this.loader$.next(load);
    }
}
