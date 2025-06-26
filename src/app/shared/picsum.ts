import { booleanAttribute, Component, computed, input, numberAttribute } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-picsum',
  imports: [NgClass],
  template: `
    <h2>
      {{ width() }} x {{ height() }}
    </h2>
    <img 
    [src]="url()" 
    alt="img picsum"
    [ngClass]="{'border-4 border-sky-400': border()}"
    >
  `,
  styles: ``
})
export class Picsum {
  title = input.required<string>()
  width = input(300, { transform: numberAttribute})
  height = input(200, { transform: numberAttribute})
  border = input(false, { transform: booleanAttribute })
  grayscale = input(false, { transform: booleanAttribute })

  url = computed(() => {
    const w = this.width();
    const h = this.height();
    const grayscale = this.grayscale() ? '?grayscale' : ''
    return `https://picsum.photos/${w}/${h}${grayscale}`
  })
}
