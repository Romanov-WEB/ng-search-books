import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from '../../list-books/list-books.component';
import { ItemBookComponent } from '../../item-book/item-book.component';
import { MainLayoutComponent } from '../components/main-layout/main-layout.component';

const route: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        pathMatch: 'full',
        children: [
            { path: '', component: ListBooksComponent },
            { path: 'book/:id', component: ItemBookComponent },
        ],
    },
    { path: '**', redirectTo: 'books-list', pathMatch: 'full' },
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
