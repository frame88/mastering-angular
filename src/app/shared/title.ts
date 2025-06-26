import { NgClass } from '@angular/common';
import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [NgClass],
  template: `
    <h1 [ngClass]="{
      'sizeSM': size() === 'sm',
      'sizeMD': size() === 'md',
      'sizeXL': size() === 'xl',
      'underlined': underlined(),
    }">
      <ng-content>...</ng-content>
    </h1>
  `,
  styles: `
    .sizeSM { font-size: 20px }
    .sizeMD { font-size: 30px }
    .sizeXL { font-size: 40px; font-weight: bold }
    .underlined { text-decoration: underline }
  `
})
export class Title {
  size = input<'sm' | 'md' | 'xl'>('md')
  underlined = input(false, { transform: booleanAttribute })
}
