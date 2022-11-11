import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [CommonModule, HttpClientModule, BrowserModule],
    exports: [CommonModule, HttpClientModule, BrowserModule],
})
export class SharedModule {}
