import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { ItemBookComponent } from './item-book/item-book.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { SharedModule } from './shared/module/shared.module';
import { RouterAppModule } from './shared/module/router-app.module';

@NgModule({
    declarations: [AppComponent, ListBooksComponent, ItemBookComponent, MainLayoutComponent],
    imports: [SharedModule, RouterAppModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
