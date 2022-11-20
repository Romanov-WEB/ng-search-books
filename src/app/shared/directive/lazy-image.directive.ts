import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appLazyImage]',
})
export class LazyImageDirective {
    constructor(private elem: ElementRef<HTMLImageElement>, private renderer: Renderer2) {
        this.renderer.setAttribute(this.elem.nativeElement, 'width', '128');
        this.renderer.setAttribute(this.elem.nativeElement, 'height', '160');
        this.renderer.setAttribute(this.elem.nativeElement, 'loading', 'lazy');
    }
}
