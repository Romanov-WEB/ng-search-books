import { Categories, Sorting } from './categories.types';

export interface GetBooksAll {
    search: string;
    categories: Categories;
    startIndex: number;
    maxResults: number;
    orderBy: Sorting;
}
