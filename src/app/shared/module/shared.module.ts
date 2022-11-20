import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgOptimizedImage } from '@angular/common';

@NgModule({
    imports: [CommonModule, HttpClientModule, BrowserModule, ReactiveFormsModule, NgOptimizedImage],
    exports: [CommonModule, HttpClientModule, BrowserModule, ReactiveFormsModule, NgOptimizedImage],
})
export class SharedModule {}
