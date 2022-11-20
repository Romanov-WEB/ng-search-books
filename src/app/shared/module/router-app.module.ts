import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from '../../list-books/list-books.component';
import { ItemBookComponent } from '../../item-book/item-book.component';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';
import { BookInfoResolver } from '../../item-book/book-info.resolver';

const route: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            { path: '', component: ListBooksComponent },
            {
                path: 'book/:id',
                component: ItemBookComponent,
                resolve: {
                    book: BookInfoResolver,
                },
            },
        ],
    },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(route, {
            preloadingStrategy: PreloadAllModules,
        }),
    ],
    exports: [RouterModule],
})
export class RouterAppModule {}
