import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input
} from '@angular/core';

@Directive({
  selector: '[focused-background]'
})
export class FocusedBackgroundDirective {
  @Input() color: string;

  private cursorType = 'text';
  private defaultBackground = '#ededed';
  private transitionProperties = '0.3s ease-in';
  private borderProperties = '1px solid #cfcfcf';
  private defaultBorderState = 'none';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(
      this.element.nativeElement,
      'cursor',
      this.cursorType
    );
  }

  @HostListener('focus') onFocus() {
    this.setCustomStyles();
  }

  @HostListener('focusout') onFocusOut() {
    this.setDefaultStyles();
  }

  private setCustomStyles(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      this.color
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'border',
      this.borderProperties
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'transition',
      this.transitionProperties
    );
  }

  private setDefaultStyles(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      'background',
      this.defaultBackground
    );
    this.renderer.setStyle(
      this.element.nativeElement,
      'border',
      this.defaultBorderState
    );
  }
}
