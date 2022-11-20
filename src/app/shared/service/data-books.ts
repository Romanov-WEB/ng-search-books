export interface DataBooks {
    kind: string;
    totalItems: number;
    items?: ItemsBooks[] | null;
}
export interface ItemsBooks {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
}
export interface VolumeInfo {
    title: string;
    subtitle?: string | null;
    authors?: string[] | null;
    publishedDate: string;
    industryIdentifiers?: IndustryIdentifiersEntity[] | null;
    readingModes: ReadingModes;
    pageCount?: number | null;
    printType: string;
    categories?: string[] | null;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    publisher?: string | null;
    description?: string | null;
    averageRating?: number | null;
    ratingsCount?: number | null;
}
export interface IndustryIdentifiersEntity {
    type: string;
    identifier: string;
}
export interface ReadingModes {
    text: boolean;
    image: boolean;
}
export interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}
export interface ImageLinks {
    medium: string
    small: string
    large: string
    extraLarge: string
    smallThumbnail: string;
    thumbnail: string;
}
export interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    buyLink?: string | null;
    listPrice?: ListPriceOrRetailPrice | null;
    retailPrice?: ListPriceOrRetailPrice1 | null;
    offers?: OffersEntity[] | null;
}
export interface ListPriceOrRetailPrice {
    amount: number;
    currencyCode: string;
}
export interface ListPriceOrRetailPrice1 {
    amount: number;
    currencyCode: string;
}
export interface OffersEntity {
    finskyOfferType: number;
    listPrice: ListPriceOrRetailPrice2;
    retailPrice: ListPriceOrRetailPrice2;
}
export interface ListPriceOrRetailPrice2 {
    amountInMicros: number;
    currencyCode: string;
}
export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: EpubOrPdf;
    pdf: EpubOrPdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}
export interface EpubOrPdf {
    isAvailable: boolean;
    downloadLink?: string | null;
    acsTokenLink?: string | null;
}
export interface SearchInfo {
    textSnippet: string;
}
