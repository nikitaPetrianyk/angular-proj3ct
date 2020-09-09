import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[hovered-background]'
})
export class BgColouredDirective {
  @Input() color: string = '#fff';

  private defaultColor = '#fff';
  private cursorType = 'pointer';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'cursor',
      this.cursorType
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColoured();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setDefaultColor();
  }

  private setBackgroundColoured(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      this.color
    );
  }

  private setDefaultColor(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      this.defaultColor
    );
  }
}
