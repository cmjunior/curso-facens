import { Directive, ElementRef, Renderer2 } from '@angular/core';

var VMasker = require('vanilla-masker')

@Directive({
  selector: '[cpfCnpj]'
})
export class CpfCnpjDirective {
  public nativeElement: HTMLInputElement

  constructor(public element: ElementRef, public render: Renderer2) {
      this.nativeElement = this.element.nativeElement

      this.render.listen(this.nativeElement, 'keyup', () => {
        const text = this.nativeElement.value.replace(/[_\W]+/g,'')
        const mask = text.length < 12 ? '999.999.999-99' : '99.999.999/9999-99';

        VMasker(this.nativeElement).maskPattern(mask)
      })
  }

}
