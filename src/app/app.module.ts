import { NgModule, Provider } from '@angular/core';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { ItemBookComponent } from './item-book/item-book.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SharedModule } from './shared/module/shared.module';
import { RouterAppModule } from './shared/module/router-app.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadBooksInterceptor } from './shared/service/load-books.interceptor';
import { LoaderComponent } from './shared/components/loader/loader.component';

const INTERCEPTOR_PROVIDER: Provider = {
    provide: HTTP_INTERCEPTORS,
    multi: true,
    useClass: LoadBooksInterceptor,
};

@NgModule({
    declarations: [
        AppComponent,
        ListBooksComponent,
        ItemBookComponent,
        MainLayoutComponent,
        LoaderComponent,
    ],
    imports: [SharedModule, RouterAppModule],
    providers: [INTERCEPTOR_PROVIDER],
    bootstrap: [AppComponent],
})
export class AppModule {}
