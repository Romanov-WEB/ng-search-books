import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, HttpClientModule, BrowserModule, ReactiveFormsModule],
    exports: [CommonModule, HttpClientModule, BrowserModule, ReactiveFormsModule],
})
export class SharedModule {}
