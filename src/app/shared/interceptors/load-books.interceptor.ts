import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { finalize, Observable, tap } from 'rxjs';
import { LoaderService } from '../components/loader/loader.service';

@Injectable()
export class LoadBooksInterceptor implements HttpInterceptor {
    constructor(private loader: LoaderService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap(() => {
                this.loader.onLoader(true);
            }),
            finalize(() => {
                this.loader.onLoader(false);
            }),
        );
    }
}
